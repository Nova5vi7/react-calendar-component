import "./time-range.scss";

const TimeRange = () => {
    return (
        <div className='time-range'>
            <div className="time-table">
                <div className="block-t">
                    Di. 25.04.2023
                </div>
                <div className="time-list-wrap">
                    <ul className="time-list">
                        <li>16:00</li>
                        <li>16:30</li>
                        <li>17:00</li>
                        <li>17:30</li>
                    </ul>
                </div>
            </div>
            <div className="time-table">
                <div className="block-t">
                    Di. 25.04.2023
                </div>
                <div className="time-list-wrap">
                    <ul className="time-list">
                        <li>17:00</li>
                        <li>17:30</li>
                        <li>18:00</li>
                        <li>18:30</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TimeRange;