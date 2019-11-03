var cutoffDate = document.getElementsByClassName('cutoff-date');
var daysFromNow = document.getElementsByClassName('days-from-now');

var momentCutoff = moment('2020-04-21').format('MMMM Qo');
var fromNow = moment([2020, 04, 21]).fromNow();

var hiltonCutoffDate = document.getElementById('hilton-cutoff-date');
var hiltonDaysFromNow = document.getElementById('hilton-days-from-now');

var hiltonMomentCutoff = moment('2020-05-15').format('MMMM Qo');
var hiltonFromNow = moment([2020, 05, 15]).fromNow();

for (var i = 0; i < cutoffDate.length; i++) {
    cutoffDate[i].innerHTML = momentCutoff;
}

for (var i = 0; i < daysFromNow.length; i++) {
    daysFromNow[i].innerHTML = fromNow;
}

hiltonCutoffDate.innerHTML = hiltonMomentCutoff;
hiltonDaysFromNow.innerHTML = hiltonFromNow;
