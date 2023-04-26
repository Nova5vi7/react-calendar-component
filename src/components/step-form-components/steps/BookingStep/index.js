import React, {useState} from 'react';
import StepBlockTitle from "../../StepBlockTitle";
import BookingLink from "../../BookingLink";
import CalendarComponent from "../../CalendarComponent";
import FormComponent from "../../FormComponent";
import "./booking-step.scss";

const BookingStep = () => {
    const [activeBooking, setActiveBooking] = useState(0);
    const [isCalendarStep, setCalendarStepStatus] = useState(false);
    const [isFormStep, setFormStepStatus] = useState(false);
    const bookingData = [
        {
            id: 0,
            bookingName: 'Tagesticket',
            tariffPlanName: 'Ein Tag',
            tariffPlanValue: '25',
            calendarSettings: {
                view: "month"
            }
        },
        {
            id: 1,
            bookingName: 'Monatsticket',
            tariffPlanName: 'Ein Monat',
            tariffPlanValue: '299',
            calendarSettings: {
                view: "year"
            }
        },
        {
            id: 2,
            bookingName: 'Jahresticket',
            tariffPlanName: 'Ein Jahr',
            tariffPlanValue: '3 228',
            calendarSettings: {
                view: "decade"
            }
        },
    ]

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

    console.log(activeBooking, bookingData[activeBooking].calendarSettings)

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