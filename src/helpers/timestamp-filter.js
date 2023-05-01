const timestampFilter = (currentTime, timeValue, timeObj) => {
    const date1 = new Date();
    date1.setHours(currentTime.split(":")[0]);
    date1.setMinutes(currentTime.split(":")[1]);

    const date2 = new Date();
    date2.setHours(timeValue.split(":")[0]);
    date2.setMinutes(timeValue.split(":")[1]);

    if (date1 < date2) {
        return timeObj;
    } else if (date1 > date2) {
        return;
    }
}

export default timestampFilter;