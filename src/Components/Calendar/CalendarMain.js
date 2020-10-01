import React from "react";
import style from "../../style.module.css";
import Calendar from "./Calendar";
import PopUpWindow from "./PopUpWindow";
import {connect} from "react-redux";
import {hidePopUpWindow} from "../../Store/Reducers/CalendarReducer";

class CalendarMain extends React.Component {
    render() {
        return <React.Fragment>
            {this.props.isShownPopUpWindow
                ? <PopUpWindow
                    isShownPopUpWindow={this.props.isShownPopUpWindow}
                    hidePopUpWindow={this.props.hidePopUpWindow}
                    chosenMonth={this.props.chosenMonth}
                    chosenWeekDay={this.props.chosenWeekDay}
                    chosenDay={this.props.chosenDay}
                    weekDays={this.props.weekDays}
                    month={this.props.month}
                />
                : null}
        <div className={style["calendar-content"]}>
            <div className={style["choose-meeting"]}>
                <h1>choose the day <br/>for the <marker>meeting</marker></h1>
                <p>We encourage you to book your
                    <br/>appointment online.
                    <br/>This will save you time.
                </p>
            </div>
            <Calendar/>
        </div>
        </React.Fragment>
    }
}

let mapStateToProps = (state) => {
    return {
        isShownPopUpWindow: state.CalendarReducer.isShownPopUpWindow,
        chosenMonth: state.CalendarReducer.chosenMonth,
        chosenWeekDay: state.CalendarReducer.chosenWeekDay,
        chosenDay: state.CalendarReducer.chosenDay,
        weekDays: state.CalendarReducer.weekDays,
        month: state.CalendarReducer.month
    }
}

export default connect(mapStateToProps, {hidePopUpWindow})(CalendarMain);