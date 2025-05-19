const convertUTCDateToLocalDate = (date) => {
    let newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());
    return newDate;
};

const isLoggedIn = () => {
    const validTill = localStorage.getItem('validTill') || null;

    const convertedValidTill = convertUTCDateToLocalDate(validTill);
    const currentDate = new Date();

    if (convertedValidTill > currentDate)
        return true;
    return false;
};