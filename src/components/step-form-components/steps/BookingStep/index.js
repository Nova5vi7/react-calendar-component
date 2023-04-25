import React from 'react';
import StepBlockTitle from "../../StepBlockTitle";
import "./booking-step.scss";
import BookingLink from "../../BookingLink";

const BookingStep = (props) => {
    return (
        <div className='booking-block'>
            <StepBlockTitle titleText=''/>
            <BookingLink
                bookingName="Tagesticket"
                tariffPlanName="Ein Tag"
                tariffPlanValue="25"
            />
            <BookingLink
                bookingName="Monatsticket"
                tariffPlanName="Ein Monat"
                tariffPlanValue="299"
            />
            <BookingLink
                bookingName="Jahresticket"
                tariffPlanName="Ein Jahr"
                tariffPlanValue="3228"
            />
        </div>
    );
}

export default BookingStep;