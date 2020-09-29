import React from "react";
import style from "../../style.module.css";

const Calendar = () => {
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let weekDays = [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ]
    let date = new Date();
    date.setDate(1);
    console.log(date.getDay());
    let currentDate = new Date().getDate();
    let monthDays = [];
    let lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    console.log(prevLastDay)
    const firstDayIndex = date.getDay();
    for(let i = firstDayIndex; i > 0; i--) {
        monthDays.push(prevLastDay - i + 1)
    }

    for (let i = 1; i <= lastDay; i++) {
        date.setDate(i);
        let day = date.getDate()
        monthDays.push(day);
    }
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    const nextDays = 7 - lastDayIndex - 1;

    for (let i = 1; i <= nextDays; i++) {
        monthDays.push(i)
    }
    // console.log(date.setMonth(5));
    const showPrevMonth = () => {
        date.setMonth(date.getMonth() - 1);
        console.log("click")
    }
    const showNextMonth = () => {
        date.setMonth(date.getMonth() + 1);
        console.log("click")
    }
    return <div className={style.calendar}>
        <div>
           <span onClick={showPrevMonth}>{"<"}</span> {month[date.getMonth()]} <span onClick={showNextMonth}>{">"}</span>
        </div>
        <div className={style.days}>
            {monthDays.map(day => <div key={day} className={Number(day) === currentDate
                ? style["current-day"]
                : style.day}>{day}</div>)}
        </div>
        <div className={style.days}>
            {weekDays.map(day => <div key={day} className={style.day}>{day}</div>)}
        </div>

    </div>
}

export default Calendar;