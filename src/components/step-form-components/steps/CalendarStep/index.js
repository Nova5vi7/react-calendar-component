import React from 'react';
import Calendar from 'react-calendar';
import StepBlockTitle from "../../StepBlockTitle";
import BookingLink from "../../BookingLink";
import GreenButton from "../../buttons/GreenButton";
import TextButton from "../../buttons/TextButton";
import BackButton from "../../buttons/BackButton";
import CalendarComponent from "../../CalendarComponent";
import "./calendar-step.scss";

const CalendarStep = (props) => {
    return (
        <div className='calendar-block'>
            <StepBlockTitle titleText='Tagesticket'/>
            <CalendarComponent/>
            <div className="btn-wrap">
                <BackButton/>
                <TextButton
                    btnText='Buchung hinzufugen'
                />
                <GreenButton
                    btnText='Jetzt Buchen'
                />
            </div>
        </div>
    );
}

export default CalendarStep;