import "./time-range.scss";
import moment from "moment";
import {formatDateData} from "../../../helpers/format-date-data";

const TimeRange = ({
                       startHour,
                       startDate,
                       endDate,
                       startTimesList,
                       endTimesList,
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
                        {
                            startTimesList.map(startTime => {
                                const {time_value, time_status} = startTime;
                                if(time_value === '18:00') return;
                                return (
                                    <li className={time_status ? 'active' : ''} onClick={() => onChangeStartHour(startTime)} key={time_value}>{time_value}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={`time-table ${startHour ? '' : 'disabled'}`}>
                <div className="block-t">
                    {endDate ?
                        moment(endDate).locale('de').format("dd") + '.' + " " + formatDateData(endDate)
                        : ''}
                </div>
                <div className="time-list-wrap">
                    <ul className="time-list">
                        {
                            endTimesList.map(endTime => {
                                const {time_value, time_status} = endTime;
                                return (
                                    <li className={time_status ? 'active' : ''} onClick={() => onChangeEndHour(endTime)} key={time_value}>{time_value}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimeRange;