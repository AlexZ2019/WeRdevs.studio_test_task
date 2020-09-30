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
                />
                : null}
        <div className={style["calendar-content"]}>
            <div className={style["choose-meeting"]}>
                <h1>choose the day <br/>for the <marker>meeting</marker></h1>
            </div>
            <Calendar/>

        </div>
        </React.Fragment>
    }
}

let mapStateToProps = (state) => {
    return {
        isShownPopUpWindow: state.CalendarReducer.isShownPopUpWindow
    }
}

export default connect(mapStateToProps, {hidePopUpWindow})(CalendarMain);