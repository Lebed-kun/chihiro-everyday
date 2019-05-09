export function formatDate(date, pattern) {
    let res = pattern.replace('Y', date.getFullYear());

    let month = (date.getMonth() < 9 ? '0' : '') +
        (date.getMonth() + 1);

    let day = (date.getDate() < 10 ? '0' : '') +
        date.getDate();

    let hours = (date.getHours() < 10 ? '0' : '') +
        date.getHours();

    let minutes = (date.getMinutes() < 10 ? '0' : '') +
        date.getMinutes();

    let seconds = (date.getSeconds() < 10 ? '0' : '') +
        date.getSeconds();

    res = res.replace('m', month);
    res = res.replace('d', day);
    res = res.replace('H', hours);
    res = res.replace('M', minutes);
    res = res.replace('S', seconds);

    return res;
}