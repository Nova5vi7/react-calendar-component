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

    useEffect(() => {
        // Use XPath to get the value of the input element
        const inputElement = document.evaluate('//input[@id="my-input"]', document, null,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const inputValue = JSON.parse(inputElement.value);
        setBookingData(inputValue);
    }, []);

    const setCalendarStep = (bookingId) => {
        setActiveBooking(bookingId)
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

    if(!bookingData.length) {
        return (
            <p>Loading...</p>
        )
    }

    console.log(bookingData)

    return (
        <div className='booking-block'>
            <StepBlockTitle titleText=''/>
            {
                !isCalendarStep &&
                bookingData.map((itm, index) => {
                    return (
                        <BookingLink
                            bookingId={itm.id}
                            bookingName={itm.bookingName}
                            tariffPlanName={itm.tariffPlanName}
                            tariffPlanValue={itm.tariffPlanValue}
                            onClick={setCalendarStep}
                            key={index}
                        />
                    )
                })
            }
            {
                isCalendarStep && !isFormStep &&
                <CalendarComponent
                    settings={bookingData[activeBooking].calendarSettings}
                    backButtonClick={backToStepBooking}
                    setStep={setFormStep}
                />
            }
            {isFormStep && <FormComponent backToStepCalendar={backToStepCalendar}/>}
        </div>
    );
}

export default BookingStep;