"use strict";

const json = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

const currentTime = document.querySelectorAll(".current");
const previousTime = document.querySelectorAll(".previous");

dailyBtn.addEventListener("click", () => {
  for (let x = 0; x < currentTime.length; x++) {
    currentTime[x].innerHTML = `${json[x].timeframes.daily.current}hrs`;
    previousTime[x].innerHTML = `Last Day - 
    ${json[x].timeframes.daily.previous}hrs`;
    dailyBtn.classList.add("add_color");
    weeklyBtn.classList.remove("add_color");
    monthlyBtn.classList.remove("add_color");
  }
});

weeklyBtn.addEventListener("click", () => {
  for (let x = 0; x < currentTime.length; x++) {
    currentTime[x].innerHTML = `${json[x].timeframes.weekly.current}hrs`;
    previousTime[x].innerHTML = `Last Week - 
    ${json[x].timeframes.weekly.previous}hrs`;
    dailyBtn.classList.remove("add_color");
    weeklyBtn.classList.add("add_color");
    monthlyBtn.classList.remove("add_color");
  }
});

monthlyBtn.addEventListener("click", () => {
  for (let x = 0; x < currentTime.length; x++) {
    currentTime[x].innerHTML = `${json[x].timeframes.monthly.current}hrs`;
    previousTime[x].innerHTML = `Last Week - 
    ${json[x].timeframes.monthly.previous}hrs`;
    dailyBtn.classList.remove("add_color");
    weeklyBtn.classList.remove("add_color");
    monthlyBtn.classList.add("add_color");
  }
});
