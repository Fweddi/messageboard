const timeAgo = (date) => {
    date = parseInt(date, 10);
    let secondsDiff = Date.now() - date;
    let minutesDiff = Math.floor(secondsDiff / 60);
    let hoursDiff = Math.floor(minutesDiff / 60);
    let daysDiff = Math.floor(hoursDiff / 24);
    let monthsDiff = Math.floor(daysDiff / 30);
    let yearsDiff = Math.floor(daysDiff / 365);

    if (secondsDiff <= 60) return secondsDiff > 1 ? [secondsDiff, ' seconds'] : [secondsDiff, ' second'];
    else if (minutesDiff <= 60) return minutesDiff > 1 ? [minutesDiff, ' minutes'] : [minutesDiff, ' minute'];
    else if (hoursDiff <= 60) return hoursDiff > 1 ? [hoursDiff, ' hours'] : [hoursDiff, ' hour'];
    else if (daysDiff <= 30) return daysDiff > 1 ? [daysDiff, ' days'] : [daysDiff, ' day'];
    else if (monthsDiff <= 12) return monthsDiff > 1 ? [monthsDiff, ' months'] : [monthsDiff, ' month'];
    else return yearsDiff > 1 ? [yearsDiff, ' years'] : [yearsDiff, ' year'];
}

module.exports = timeAgo;