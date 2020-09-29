import React from "react";
import style from "../../style.module.css";
import {connect} from "react-redux";
import {setNextMonth, setPrevMonth} from "../../Store/Reducers/CalendarReducer";

class Calendar extends React.Component {

    render() {
        this.props.date.setDate(1);
        let prevLastDays = [];

        let nextFirstDays = [];
        let lastDay = new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDate();
        let prevLastDay = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), 0).getDate();
        let firstDayIndex = this.props.date.getDay();

        for (let i = firstDayIndex; i > 0; i--) {
            prevLastDays.push(prevLastDay - i + 1)
        }

        for (let i = 1; i <= lastDay; i++) {
            this.props.date.setDate(i);
            let day = this.props.date.getDate()
            this.props.monthDays.push(day);
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
        console.log(this.props.monthDays)
        return <div className={style.calendar}>
            <div>
                <span onClick={showPrevMonth}>{"< "}</span>
                {this.props.month[this.props.date.getMonth()] + " "}
                {this.props.date.getFullYear()}
                <span onClick={showNextMonth}>{" >"}</span>
            </div>
            <div className={style.days}>
                {prevLastDays.map(day => <div className={style.day}>{day}
                </div>)}
                {this.props.monthDays.map(day => <div
                    className={day === new Date().getDate() && new Date().getDate() && this.props.date.getMonth() === new Date().getMonth()
                        ? style["current-day"] + " " + style.day
                        : style.day}>{day}</div>)}
                {nextFirstDays.map(day => <div className={style.day}>
                    {day}
                </div>)}
            </div>
            <div className={style.days}>
                {this.props.weekDays.map(day => <div key={day} className={style.day}>{day}</div>)}
            </div>

        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        month: state.CalendarReducer.month,
        weekDays: state.CalendarReducer.weekDays,
        date: state.CalendarReducer.date,
        monthDays: state.CalendarReducer.monthDays
    }
}
export default connect(mapStateToProps, {setPrevMonth, setNextMonth})(Calendar);