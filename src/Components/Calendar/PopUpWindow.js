import React, {useEffect, useState} from "react";
import style from "../../style.module.css";

const PopUpWindow = (props) => {
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let [chosenMonth, setChosenMonth] = useState("");
    useEffect(() => {
        setChosenMonth(props.chosenMonth)
    }, [props.chosenMonth]);
    let [chosenWeekDay, setChosenWeekDay] = useState("");
    useEffect(() => {
        setChosenWeekDay(props.chosenWeekDay)
    }, [props.chosenWeekDay]);

    return <div className={style["pop-up-notification"]}>
        <div className={style.form}>
            <div onClick={props.hidePopUpWindow} className={style.close}>
                <div className={style["first-div"]}></div>
                <div className={style["second-div"]}></div>
            </div>
            <div>
                <p>Month</p>
                <input type="text" value={props.month[chosenMonth]}/>
            </div>
            <div>
                <p>Day</p>
                <input type="text" value={`${props.chosenDay}th ${weekDays[chosenWeekDay]}`}/>
            </div>
        </div>
    </div>
}

export default PopUpWindow;