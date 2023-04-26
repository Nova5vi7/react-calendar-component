import "./booking-link.scss";

const BookingLink = ({bookingId, bookingName, tariffPlanName, tariffPlanValue, onClick}) => {
    return (
        <div className='booking-link-block' onClick={() => onClick(bookingId)}>
            <div className="block-l">
                <h4 className="booking-name">
                    {bookingName}
                </h4>
                <div className="tariff-plan-wrap">
                    <p>{tariffPlanName}</p>
                    <span>|</span>
                    <p>{tariffPlanValue},00€</p>
                </div>
            </div>
            <div className="block-r">
                <button className="arrow-btn">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                              d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
                              className=""></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BookingLink;