import React from "react";
import style from "../../style.module.css";

const PopUpWindow = (props) => {
    return <div className={style["pop-up-notification"]}>
        <div className={style.form}>
            <div onClick={props.hidePopUpWindow} className={style.close}>

            </div>
            <div>
                <p>Month</p>
                <input type="text"/>
            </div>
            <div>
                <p>Day</p>
                <input type="text"/>
            </div>
        </div>
    </div>
}

export default PopUpWindow;