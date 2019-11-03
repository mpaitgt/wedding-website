var cutoffDate = document.getElementsByClassName('cutoff-date');
var daysFromNow = document.getElementsByClassName('days-from-now');

var momentOne = moment('2020-04-21');
var momentCutoff = momentOne.format('MMMM Do');
var fromNow = momentOne.toNow(true);

var hiltonCutoffDate = document.getElementById('hilton-cutoff-date');
var hiltonDaysFromNow = document.getElementById('hilton-days-from-now');

var momentTwo = moment('2020-05-15');
var hiltonMomentCutoff = momentTwo.format('MMMM Do');
var hiltonFromNow = momentTwo.toNow(true);

for (var i = 0; i < cutoffDate.length; i++) {
    cutoffDate[i].innerHTML = momentCutoff;
}

for (var i = 0; i < daysFromNow.length; i++) {
    daysFromNow[i].innerHTML = fromNow;
}

hiltonCutoffDate.innerHTML = hiltonMomentCutoff;
hiltonDaysFromNow.innerHTML = hiltonFromNow;
