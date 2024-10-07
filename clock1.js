/*
let clock = document.getElementById('clock')
let dateElement = document.getElementById('date');
setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
*/
/*
let clock = document.getElementById('clock');
let dateElement = document.getElementById('date');

setInterval(() => {
    const now = new Date();

    // Update time
    clock.innerHTML = now.toLocaleTimeString();

    // Update date
    dateElement.innerHTML = now.toLocaleDateString(); // Display the date
}, 1000);
*/

let clock = document.getElementById('clock');
let dateElement = document.getElementById('date');

setInterval(() => {
    const now = new Date();

    // Update time
    clock.innerHTML = now.toLocaleTimeString();

    // Update date with day of the week
    dateElement.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}, 1000);



