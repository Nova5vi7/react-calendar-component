import moment from "moment";

export const formatDateData = (dateData) => {
    return moment(dateData).format('DD.MM.YYYY');
}