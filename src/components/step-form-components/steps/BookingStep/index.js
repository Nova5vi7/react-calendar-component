import {useState, useEffect} from 'react';
import moment from 'moment';
import StepBlockTitle from "../../StepBlockTitle";
import BookingLink from "../../BookingLink";
import CalendarComponent from "../../CalendarComponent";
import FormComponent from "../../FormComponent";
import timestampFilter from "../../../../helpers/timestamp-filter";
import {CSSTransition} from "react-transition-group";
import "./booking-step.scss";

const BookingStep = () => {
    const [bookingData, setBookingData] = useState([]);
    const [activeBooking, setActiveBooking] = useState(0);
    const [firstStep, setFirstStep] = useState(true)
    const [isCalendarStep, setCalendarStepStatus] = useState(false);
    const [isFormStep, setFormStepStatus] = useState(false);
    const [dateValue, setDateValue] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(null);
    const [currentYear, setCurrentYear] = useState(null);
    const [startHour, setStartHour] = useState(null);
    const [endHour, setEndHour] = useState(null);
    const [personCount, setPersonCount] = useState(1);
    const [activeExtras, setActiveExtras] = useState([]);
    const [timesList, setTimesList] = useState([]);
    const [startTimesList, setStartTimesList] = useState([]);
    const [endTimesList, setEndTimesList] = useState([]);
    const [transitionFirstStep, setTransitionFirstStep] = useState(false);
    const [transitionCalendarStep, setTransitionCalendarStep] = useState(false);

    useEffect(() => {
        // Use XPath to get the value of the input element
        const inputElement = document.evaluate('//input[@id="my-input"]', document, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const inputValue = JSON.parse(inputElement.value);
        setTimesList(timeListGeneration(inputValue[0].times_list));
        setStartTimesList(timeListGeneration(inputValue[0].times_list));
        setEndTimesList(timeListGeneration(inputValue[0].times_list));
        setBookingData(inputValue);
    }, []);

    const timeListGeneration = (timeList, setStartTimesList, setEndTimesList) => {
        // const currentTime = moment().format("HH:mm");
        const currentTime = '10:25';
        return timeList.filter(timeObj => {
            const {time_value} = timeObj;
            return timestampFilter(currentTime, time_value, timeObj);
        });
    };

    const setCalendarStep = (bookingIndex) => {
        setTransitionFirstStep(true);
        setActiveBooking(bookingIndex)
        setCalendarStepStatus(true)
    };

    const setFormStep = (view) => {
        if (view === 'month') {
            if (startDate && endDate && startHour && endHour) {
                setFormStepStatus(true);
                setTransitionCalendarStep(true);
            }
        }
        if (view === 'year') {
            if (currentMonth) {
                setFormStepStatus(true);
                setTransitionCalendarStep(true);
            }
        }
        if (view === 'decade') {
            if (currentYear) {
                setFormStepStatus(true);
                setTransitionCalendarStep(true);
            }
        }
    };

    const backToStepBooking = () => {
        setFirstStep(true);
        setTransitionFirstStep(false);
        setCalendarStepStatus(false)
        setStartDate(null);
        setEndDate(null);
        setStartHour(null);
        setEndHour(null);
        setCurrentMonth(null);
        setCurrentYear(null);
    };

    const backToStepCalendar = () => {
        setFormStepStatus(false)
        setCalendarStepStatus(true);
        setTransitionCalendarStep(false);
        setActiveExtras([])
        setPersonCount(1)
    };

    const backToFirstStep = () => {
        setFirstStep(true);
        setTransitionFirstStep(false);
        setTransitionCalendarStep(false);
        setCalendarStepStatus(false);
        setFormStepStatus(false);
        setActiveExtras([]);
        setPersonCount(1);
        setStartDate(null);
        setEndDate(null);
        setStartHour(null);
        setEndHour(null);
        setCurrentMonth(null);
        setCurrentYear(null);
    };

    const onChangeDate = (value) => {
        setStartDate(value[0])
        setEndDate(value[1])
    };

    const onChangeStartHour = (timeData) => {
        setEndHour(null);
        const newStartTimesList = [...startTimesList];
        const endTimesListCopy = [...timesList];
        const timeItemIndex = newStartTimesList.indexOf(timeData);
        const newTimeObj = Object.assign({}, timeData);

        newTimeObj.time_status = true;
        newStartTimesList.map(itm => {
            itm.time_status = false;
            return itm;
        })
        newStartTimesList.splice(timeItemIndex, 1, newTimeObj);

        const {time_value} = timeData
        const newEndTimesList = endTimesListCopy.filter(timeObj => {
            return timestampFilter(time_value, timeObj.time_value, timeObj);
        })

        setStartTimesList(newStartTimesList);
        setEndTimesList(newEndTimesList);
        setStartHour(time_value)
    };

    const onChangeEndHour = (timeData) => {
        const {time_value} = timeData
        const endTimesListCopy = [...endTimesList];
        const timeItemIndex = endTimesListCopy.indexOf(timeData);
        const newTimeObj = Object.assign({}, timeData);

        newTimeObj.time_status = true;
        endTimesListCopy.map(itm => {
            itm.time_status = false;
            return itm;
        })
        endTimesListCopy.splice(timeItemIndex, 1, newTimeObj);

        setEndTimesList(endTimesListCopy);
        setEndHour(time_value)
    };

    const onClickMonth = (value) => {
        setDateValue(value)
        const month = moment(value).format('MMMM');
        setCurrentMonth(month)
    };

    const onClickYear = (value) => {
        setDateValue(value)
        const year = moment(value).format('YYYY');
        setCurrentYear(year);
    };

    const updateExtrasValue = (value) => {
        const extrasValue = [...activeExtras];
        if (!extrasValue.includes(value)) {
            extrasValue.push(value);
        } else {
            const elementIndex = extrasValue.indexOf(value);
            extrasValue.splice(elementIndex, 1);
        }
        setActiveExtras(extrasValue)
    };

    const submitForm = () => {
        const {id, price, calendar_settings} = bookingData[activeBooking];

        const filterPrice = price / 100;

        const isInputCreated = document.querySelectorAll('[name^="extra-"]');
        if (isInputCreated.length) {
            isInputCreated.forEach(element => {
                element.remove();
            });
        }

        const formElement = document.getElementById('my-form');
        const itemId = document.getElementById("item-id");
        const itemQuantity = document.getElementById("item-quantity");
        const itemDate = document.getElementById("item-date");
        const itemTime = document.getElementById("item-time");

        if (calendar_settings.view === 'month') {
            const momentStartDate = moment(startDate).format("YYYY-MM-DD");
            const momentEndDate = moment(endDate).format("YYYY-MM-DD");
            const finalStartDate = moment(startDate).format("DD.MM.YYYY");
            const finalEndDate = moment(endDate).format("DD.MM.YYYY");
            const a = moment(momentStartDate.split('-'));
            const b = moment(momentEndDate.split('-'));
            const quantityDays = Math.abs(a.diff(b, 'days')) + 1
            itemQuantity.value = quantityDays * personCount;
            itemDate.value = `${finalStartDate} - ${finalEndDate}`;
            itemTime.value = `${startHour}-${endHour}`
        } else {
            itemQuantity.value = filterPrice * personCount;
            itemTime.value = "9:00-18:00"
        }

        if (calendar_settings.view === 'year') {
            itemDate.value = `${currentMonth}`;
        }

        if (calendar_settings.view === 'decade') {
            itemDate.value = `${currentYear}`;
        }

        if (activeExtras.length) {
            activeExtras.map(itm => {
                const inputId = document.createElement("input");
                const inputPrice = document.createElement("input");
                inputId.type = "hidden";
                inputPrice.type = "hidden";
                inputId.name = `extra-${itm.extra_item_text}-id`;
                inputPrice.name = `extra-${itm.extra_item_text}-quantity`;
                inputId.value = `${itm.id}`
                inputPrice.value = `${itm.extra_item_price * personCount}`
                formElement.appendChild(inputId);
                formElement.appendChild(inputPrice);
            })
        }

        itemId.value = id;

        // formElement.submit();
        backToFirstStep();
    };

    const onExited = (node) => {
        if(!node) return;
        node.style.position = 'relative';
        node.style.opacity = 1;
        node.style.transform = "translateX(0)"
    }

    const onEnter = (node) => {
        if(!node) return;
        node.style.position = 'absolute';
        node.style.opacity = 0;
        node.style.transform = "translateX(-100%)"
    }

    if (!bookingData.length) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className='booking-block'>
            <StepBlockTitle titleText=''/>
            <CSSTransition
                in={transitionFirstStep}
                timeout={0}
                classNames={{
                    enterActive: 'animate__bounceIn',
                    exitActive: 'animate__bounceOut'
                }}
                onEnter={onEnter}
                onExited={onExited}>
                {
                    () => (
                        firstStep &&
                        <div className='booking-links-wrap'>
                            {
                                bookingData.map((itm, index) => {
                                    return (
                                        <BookingLink
                                            bookingIndex={index}
                                            bookingId={itm.id}
                                            bookingName={itm.title}
                                            tariffPlanName={itm.tariff_plan_name}
                                            tariffPlanValue={itm.price / 100}
                                            onClick={setCalendarStep}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </CSSTransition>

            <CSSTransition
                in={transitionCalendarStep}
                timeout={0}
                classNames={{
                    enterActive: 'animate__bounceIn',
                    exitActive: 'animate__bounceOut'
                }}
                onEnter={onEnter}
                onExited={onExited}>
                {() => (
                    isCalendarStep &&
                    <CalendarComponent
                        settings={bookingData[activeBooking].calendar_settings}
                        backButtonClick={backToStepBooking}
                        setStep={setFormStep}
                        onChange={onChangeDate}
                        dateValue={dateValue}
                        startDate={startDate}
                        endDate={endDate}
                        startHour={startHour}
                        endHour={endHour}
                        onChangeStartHour={onChangeStartHour}
                        onChangeEndHour={onChangeEndHour}
                        onClickMonth={onClickMonth}
                        onClickYear={onClickYear}
                        startTimesList={startTimesList}
                        endTimesList={endTimesList}
                    />
                )}
            </CSSTransition>

            {
                isFormStep &&
                <FormComponent
                    bookingData={bookingData[activeBooking]}
                    extrasData={bookingData[activeBooking].extras_data}
                    backToStepCalendar={backToStepCalendar}
                    personCount={personCount}
                    setPersonCount={setPersonCount}
                    updateExtrasValue={updateExtrasValue}
                    activeExtras={activeExtras}
                    submitForm={submitForm}
                />
            }
        </div>
    );
}

export default BookingStep;