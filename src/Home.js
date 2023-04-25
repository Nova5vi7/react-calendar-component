import {Link} from "react-router-dom";
import BookingStep from "./components/step-form-components/steps/BookingStep";
import CalendarStep from "./components/step-form-components/steps/CalendarStep";

const Home = () => {
    return (
        <div className='content-container'>
            <BookingStep/>
            <CalendarStep fixedTime={true}/>
            <CalendarStep fixedTime={false}/>
        </div>
    )
}

export default Home;