let { data } = require('./events.json');

function getDate(event) {
    return event.event_dates.starting_day;
}

function getName(event) {
    let { fi, en, sv, zh } = event.name;
    return fi ?? en ?? sv ?? zh;
}
const today = new Date();
const nextMonth = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

data = data
    .filter(event => getDate(event) !== null)
    .filter(event => getDate(event) >= today.toISOString())
    .filter(event => getDate(event) <= nextMonth.toISOString());

data.forEach(event => {
    let start = getDate(event);
    let name = getName(event);

    console.log(start, name);
});
