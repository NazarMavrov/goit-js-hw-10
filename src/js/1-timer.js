// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

const refs = {
    chooseData: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
console.log(refs)
// let userSelectedDate;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000));
// console.log(convertMs(140000));
// console.log(convertMs(24140000)); 
