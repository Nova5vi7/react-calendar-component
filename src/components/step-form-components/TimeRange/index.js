import "./time-range.scss";
import moment from "moment";
import {formatDateData} from "../../../helpers/format-date-data";

const TimeRange = ({
                       startDate,
                       endDate,
                       onChangeStartHour,
                       onChangeEndHour
                   }) => {
    return (
        <div className='time-range'>
            <div className="time-table">
                <div className="block-t">
                    {startDate ?
                        moment(startDate).locale('de').format("dd") + '.' + " " + formatDateData(startDate)
                        : ''}
                </div>
                <div className="time-list-wrap">
                    <ul className="time-list">
                        <li onClick={() => onChangeStartHour('16:00')}>16:00</li>
                        <li onClick={() => onChangeStartHour('16:30')}>16:30</li>
                        <li onClick={() => onChangeStartHour('17:00')}>17:00</li>
                        <li onClick={() => onChangeStartHour('17:30')}>17:30</li>
                    </ul>
                </div>
            </div>
            <div className="time-table">
                <div className="block-t">
                    {endDate ?
                        moment(endDate).locale('de').format("dd") + '.' + " " + formatDateData(endDate)
                        : ''}
                </div>
                <div className="time-list-wrap">
                    <ul className="time-list">
                        <li onClick={() => onChangeEndHour('17:00')}>17:00</li>
                        <li onClick={() => onChangeEndHour('17:30')}>17:30</li>
                        <li onClick={() => onChangeEndHour('18:00')}>18:00</li>
                        <li onClick={() => onChangeEndHour('18:30')}>18:30</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimeRange;