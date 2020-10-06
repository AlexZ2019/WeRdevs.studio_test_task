import React from "react";
import style from "../../style.module.css";
import {connect} from "react-redux";
import {
    getChosenDate, getChosenDateNextMonth, getChosenDatePrevMonth,
    setNextMonth,
    setPrevMonth,
    showPopUpWindow
} from "../../Store/Reducers/CalendarReducer";

class Calendar extends React.Component {

    render() {
        this.props.date.setDate(1);
        let prevLastDays = [];
        let currentMonthDays = [];
        let nextFirstDays = [];
        let lastDay = new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDate();
        let prevLastDay = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), 0).getDate();
        let firstDayIndex = this.props.date.getDay();

        for (let i = firstDayIndex; i > 0; i--) {
            prevLastDays.push(prevLastDay - i + 1);
        }

        for (let i = 1; i <= lastDay; i++) {
            this.props.date.setDate(i);
            let day = this.props.date.getDate();
            currentMonthDays.push(day);
        }

        const lastDayIndex = new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDay()
        const nextDays = 7 - lastDayIndex - 1;

        for (let i = 1; i <= nextDays; i++) {
            nextFirstDays.push(i);
        }

        const showPrevMonth = () => {
            this.props.setPrevMonth(1);
        }
        const showNextMonth = () => {
            this.props.setNextMonth(1);
        }
        const showPopUpWindowForCurrentMonth = (day) => {
            this.props.getChosenDate(day);
            this.props.showPopUpWindow();
        }
        const showPopUpWindowForPrevMonth = (day) => {
            this.props.getChosenDatePrevMonth(day);
            this.props.showPopUpWindow();
        }
        const showPopUpWindowForNextMonth = (day) => {
            this.props.getChosenDateNextMonth(day);
            this.props.showPopUpWindow();
        }
        return <div className={style["calendar-wrapper"]}>
            <div className={style.calendar}>
                <div className={style["moth-year-name"]}>
                    <div onClick={showPrevMonth} className={style["left-toggle"]}>
                        <div className={style["show-prev-month-arrow-first"] + " " + style["month-toggle"]}></div>
                        <div className={style["show-prev-month-arrow-second"] + " " + style["month-toggle"]}></div>
                    </div>
                    <div>
                        {this.props.month[this.props.date.getMonth()] + " "}
                        {this.props.date.getFullYear()}
                    </div>
                    <div onClick={showNextMonth} className={style["right-toggle"]}>
                        <div className={style["show-next-month-arrow-first"] + " " + style["month-toggle"]}></div>
                        <div className={style["show-next-month-arrow-second"] + " " + style["month-toggle"]}></div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style["calendar-items"]}>
                    {prevLastDays.map(day => <div
                        onClick={() => showPopUpWindowForPrevMonth(day)}
                        className={style.day + " " + style["other-days"]}>{day}
                </div>)}
                    {currentMonthDays.map(day => <div
                        onClick={() => showPopUpWindowForCurrentMonth(day)}
                        className={day === new Date().getDate()
                        && this.props.date.getMonth() === new Date().getMonth()
                        && this.props.date.getFullYear() === new Date().getFullYear()
                            ? style["current-day"] + " " + style.day
                            : style.day}>{day}</div>)}
                    {nextFirstDays.map(day => <div
                        onClick={() => showPopUpWindowForNextMonth(day)}
                        className={style.day + " " + style["other-days"]}>
                        {day}
                    </div>)}
                </div>
                <div className={style.line}></div>
                <div className={style["calendar-items"]}>
                    {this.props.weekDays.map(day => <div key={day} className={style.weekDay}>{day}</div>)}
                </div>
                <div className={style.line}></div>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        month: state.CalendarReducer.month,
        weekDays: state.CalendarReducer.weekDays,
        date: state.CalendarReducer.date,
        isShownPopUpWindow: state.CalendarReducer.isShownPopUpWindow
    }
}
export default connect(mapStateToProps, {
    setPrevMonth,
    setNextMonth,
    showPopUpWindow,
    getChosenDate,
    getChosenDatePrevMonth,
    getChosenDateNextMonth
})(Calendar);