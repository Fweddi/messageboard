const timeAgo = (date) => {
    date = parseInt(date, 10);
    let millisecondsDiff = Date.now() - date;
    let secondsDiff = Math.floor(millisecondsDiff / 1000);
    let minutesDiff = Math.floor(secondsDiff / 60);
    let hoursDiff = Math.floor(minutesDiff / 60);
    let daysDiff = Math.floor(hoursDiff / 24);
    let monthsDiff = Math.floor(daysDiff / 30);
    let yearsDiff = Math.floor(daysDiff / 365);

    if (secondsDiff <= 10) return 'Just now';
    else if (secondsDiff <= 60) return [secondsDiff, ' seconds ago'];
    else if (minutesDiff <= 60) return minutesDiff > 1 ? [minutesDiff, ' minutes ago'] : [minutesDiff, ' minute ago'];
    else if (hoursDiff <= 60) return hoursDiff > 1 ? [hoursDiff, ' hours ago'] : [hoursDiff, ' hour ago'];
    else if (daysDiff <= 30) return daysDiff > 1 ? [daysDiff, ' days ago'] : [daysDiff, ' day ago'];
    else if (monthsDiff <= 12) return monthsDiff > 1 ? [monthsDiff, ' months ago'] : [monthsDiff, ' month ago'];
    else return yearsDiff > 1 ? [yearsDiff, ' years ago'] : [yearsDiff, ' year ago'];
}

module.exports = timeAgo;