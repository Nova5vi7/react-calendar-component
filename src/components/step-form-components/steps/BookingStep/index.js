import {useState, useEffect} from 'react';
import StepBlockTitle from "../../StepBlockTitle";
import BookingLink from "../../BookingLink";
import CalendarComponent from "../../CalendarComponent";
import FormComponent from "../../FormComponent";
import "./booking-step.scss";

const BookingStep = () => {
    const [bookingData, setBookingData] = useState([]);
    const [activeBooking, setActiveBooking] = useState(0);
    const [isCalendarStep, setCalendarStepStatus] = useState(false);
    const [isFormStep, setFormStepStatus] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startHour, setStartHour] = useState(null);
    const [endHour, setEndHour] = useState(null);

    useEffect(() => {
        // Use XPath to get the value of the input element
        const inputElement = document.evaluate('//input[@id="my-input"]', document, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const inputValue = JSON.parse(inputElement.value);
        setBookingData(inputValue);
    }, []);

    const setCalendarStep = (bookingIndex, bookingId) => {
        setActiveBooking(bookingIndex)
        setCurrentBooking(bookingId)
        setCalendarStepStatus(true)
    }

    const setFormStep = () => {
        setFormStepStatus(true);
    }

    const backToStepBooking = () => {
        setCalendarStepStatus(false)
    }

    const backToStepCalendar = () => {
        setFormStepStatus(false)
    }

    const onChangeDate = (value) => {
        setStartDate(value[0])
        setEndDate(value[1])
    }

    const onChangeStartHour = (value) => {
        setStartHour(value)
    }

    const onChangeEndHour = (value) => {
        setEndHour(value)
    }

    if(!bookingData.length) {
        return (
            <p>Loading...</p>
        )
    }

    console.log(bookingData, currentBooking)

    return (
        <div className='booking-block'>
            <StepBlockTitle titleText=''/>
            {
                !isCalendarStep &&
                bookingData.map((itm, index) => {
                    return (
                        <BookingLink
                            bookingIndex={index}
                            bookingId={itm.id}
                            bookingName={itm.title}
                            tariffPlanName={itm.tariffPlanName}
                            tariffPlanValue={itm.price/100}
                            onClick={setCalendarStep}
                            key={index}
                        />
                    )
                })
            }
            {
                isCalendarStep && !isFormStep &&
                <CalendarComponent
                    settings={bookingData[activeBooking].calendar_settings}
                    backButtonClick={backToStepBooking}
                    setStep={setFormStep}
                    onChange={onChangeDate}
                    startDate={startDate}
                    endDate={endDate}
                    startHour={startHour}
                    endHour={endHour}
                    onChangeStartHour={onChangeStartHour}
                    onChangeEndHour={onChangeEndHour}
                />
            }
            {isFormStep && <FormComponent backToStepCalendar={backToStepCalendar}/>}
        </div>
    );
}

export default BookingStep;