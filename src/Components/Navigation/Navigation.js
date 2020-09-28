import React from "react";
import Logo from "../../Files/images/Logo_original_RGB.jpg"
import style from "../../style.module.css";

const Navigation = () => {
    return <header>
        <div className={style.logo}>
            <img src={Logo} alt=""/>
        </div>
        <div className={style.home}>
            home
        </div>
        <div className={style["about-us"]}>
            about us
            <div className={style.round}></div>
        </div>
        </header>
}

export default Navigation