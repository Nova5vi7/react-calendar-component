import "./counter.scss";

const Counter = ({
                     personCount,
                     setPersonCount
                 }) => {

    const onMinusOnePerson = () => {
        if(personCount > 1) {
            setPersonCount(--personCount)
        }
    }

    const onPlusOnePerson = () => {
        setPersonCount(++personCount)
    }

    return (
        <div className='counter-block'>
            <button className="minus-btn" type='button' onClick={onMinusOnePerson}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_948)">
                        <path
                            d="M19.1666 9.16664H10.8333C10.3731 9.16664 9.16664 9.16669 9.16664 9.16669H0.833349C0.373095 9.16664 0 9.53974 0 9.99999C0 10.4602 0.373095 10.8333 0.833349 10.8333H9.16669H10.8334H19.1667C19.627 10.8333 20.0001 10.4602 20.0001 9.99999C20.0001 9.53974 19.6269 9.16664 19.1666 9.16664Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_948">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className="number-wrap">{personCount}</div>
            <button className="plus-btn" type='button' onClick={onPlusOnePerson}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_944)">
                        <path
                            d="M19.1666 9.16664H10.8333V0.833349C10.8333 0.373095 10.4602 0 9.99999 0C9.53974 0 9.16664 0.373095 9.16664 0.833349V9.16669H0.833349C0.373095 9.16664 0 9.53974 0 9.99999C0 10.4602 0.373095 10.8333 0.833349 10.8333H9.16669V19.1667C9.16669 19.6269 9.53979 20 10 20C10.4603 20 10.8334 19.6269 10.8334 19.1667V10.8333H19.1667C19.627 10.8333 20.0001 10.4602 20.0001 9.99999C20.0001 9.53974 19.6269 9.16664 19.1666 9.16664Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_944">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
}

export default Counter;