import React from "react";
import style from "../../style.module.css";
import Calendar from "./Calendar";

const CalendarMain = () => {
    return <div className={style["calendar-content"]}>
        <div className={style["choose-meeting"]}>
            <h1>choose the day <br/>for the <marker>meeting</marker></h1>
        </div>
        <Calendar/>
    </div>
}

export default CalendarMain;