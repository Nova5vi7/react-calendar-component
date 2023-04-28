import moment from 'moment';
import Calendar from "react-calendar";
import TimeTable from "../TimeTable";
import TimeRange from "../TimeRange";
import BackButtonVersionOne from "../buttons/BackButtonVersionOne";
import GreenButton from "../buttons/GreenButton";
import {formatDateData} from "../../../helpers/format-date-data";
import 'react-calendar/dist/Calendar.css';
import "./calendar-component.scss";

const CalendarComponent = ({
                               settings,
                               backButtonClick,
                               setStep,
                               onChange,
                               startDate,
                               endDate,
                               startHour,
                               endHour,
                               onChangeStartHour,
                               onChangeEndHour,
                               onClickMonth,
                               onClickYear
                           }) => (
    <div className='calendar-block'>
        <div className="calendar-wrap">
            {
                settings.view === 'month' ? <div className="data-result">
                    <div className="block-l">
                        <div className="day-time">
                        <span>
                            {startDate ? moment(startDate).locale('de').format("dd") + '.' : '---'}

                        </span>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fa-fw svg-inline--fa fa-clock" data-v-c51cf6a8="">
                                <path fill="currentColor"
                                      d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                      data-v-c51cf6a8="" className=""></path>
                            </svg>
                            <span>
                            {startHour ? startHour : '--:--'}
                        </span>
                        </div>
                        <p>
                            {startDate ? formatDateData(startDate) : 'Startdatum'}
                        </p>
                    </div>
                    <div className="icon-wrap">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                  d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"
                                  className=""></path>
                        </svg>
                    </div>
                    <div className="block-r">
                        <div className="day-time">
                        <span>
                            {endDate ? moment(endDate).locale('de').format("dd") + '.' : '---'}
                        </span>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 className="fa-fw svg-inline--fa fa-clock" data-v-c51cf6a8="">
                                <path fill="currentColor"
                                      d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                                      data-v-c51cf6a8="" className=""></path>
                            </svg>
                            <span>
                            {endHour ? endHour : '--:--'}
                        </span>
                        </div>
                        <p>
                            {endDate ? formatDateData(endDate) : 'Enddatum'}
                        </p>
                    </div>
                </div> : null
            }
            <Calendar
                locale='de'
                selectRange={true}
                view={settings.view}
                onChange={onChange}
                onClickMonth={onClickMonth}
                onClickYear={onClickYear}
            />
            {
                settings.view === 'month' ?
                    <TimeRange
                        startDate={startDate}
                        endDate={endDate}
                        onChangeStartHour={onChangeStartHour}
                        onChangeEndHour={onChangeEndHour}
                    />
                    : null
            }
        </div>
        <div className="btn-wrap">
            <BackButtonVersionOne onClick={backButtonClick}/>
            <GreenButton
                btnText='Jetzt Buchen'
                onClick={() => setStep(settings.view)}
            />
        </div>
    </div>
);

export default CalendarComponent;