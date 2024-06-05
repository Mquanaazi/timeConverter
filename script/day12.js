let minutes =document.getElementById('hours');
let hours =document.getElementById('minutes');
let seconds =document.getElementById('seconds');

minutes.oninput = function () {  
let h = (parseFloat(minutes.value) )* 60 ;
hours.value = parseFloat(h.toFixed(2));
let s = (parseFloat(minutes.value)*3600);
seconds.value = parseFloat(s.toFixed(2));
}


hours.oninput = function () {
let m = (parseFloat(hours.value)) /60;
minutes.value = parseFloat(m.toFixed(2));
let s = (parseFloat(minutes.value) *3600) ;
seconds.value = parseFloat(s.toFixed(2));
}


seconds.oninput = function () {
let h = (parseFloat(seconds.value)) /60 ;
hours.value = parseFloat(h.toFixed(2));
let m = (parseFloat(seconds.value) /3600);
minutes.value = parseFloat(m.toFixed(2));
}