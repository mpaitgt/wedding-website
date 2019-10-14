var cutoffDate = document.querySelector('.cutoff-date');
var daysFromNow = document.querySelector('.days-from-now');
var momentCutoff = moment('2020-04-21').format('MMMM Qo YYYY');
var fromNow = moment([2020, 04, 21]).fromNow();

var hiltonCutoffDate = document.getElementById('hilton-cutoff-date');
var hiltonDaysFromNow = document.getElementById('hilton-days-from-now');
var hiltonMomentCutoff = moment('2020-05-15').format('MMMM Qo YYYY');
var hiltonFromNow = moment([2020, 05, 15]).fromNow();



console.log(cutoffDate);
console.log(fromNow);

cutoffDate.innerHTML = momentCutoff;
daysFromNow.innerHTML = fromNow;
hiltonCutoffDate.innerHTML = hiltonMomentCutoff;
hiltonDaysFromNow.innerHTML = hiltonFromNow;
