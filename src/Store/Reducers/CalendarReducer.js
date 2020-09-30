const SET_PREV_MONTH = "CalendarReducer/SET_PREV_MONTH";
const SET_NEXT_MONTH = "CalendarReducer/SET_NEXT_MONTH";
const SHOW_POP_UP_WINDOW = "CalendarReducer/SHOW_POP_UP_WINDOW";
const HIDE_POP_UP_WINDOW = "CalendarReducer/HIDE_POP_UP_WINDOW";
const GET_CHOSEN_DAY = "CalendarReducer/GET_CHOSEN_DAY";

let InitialState = {
    month: [
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
    ],
    weekDays: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    date: new Date(),
    chosenMonth: null,
    chosenWeekDay: null,
    chosenDay: null,
    isShownPopUpWindow: false

}


const CalendarReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PREV_MONTH:
            return {
                ...state, date: new Date(state.date.getFullYear(),state.date.getMonth() - action.month),
            }
        case SET_NEXT_MONTH:
            return {
                ...state, date: new Date(state.date.getFullYear(),state.date.getMonth() + action.month),
            }
        case SHOW_POP_UP_WINDOW:
            return {
                ...state, isShownPopUpWindow: true
            }
        case HIDE_POP_UP_WINDOW:
            return {
                ...state, isShownPopUpWindow: false
            }
        case GET_CHOSEN_DAY:
            return {
                ...state, chosenMonth: new Date(new Date().getFullYear(), new Date().getMonth(), action.chosenDay).getMonth(),
                chosenWeekDay: new Date(new Date().getFullYear(), new Date().getMonth(), action.chosenDay).getDay(),
                chosenDay: action.chosenDay

            }
        default:
            return state
    }
}

// Action creators

export const setPrevMonth = (month) => {
    return {
        type: SET_PREV_MONTH,
        month
    }
}

export const setNextMonth = (month) => {
    return {
        type: SET_NEXT_MONTH,
        month
    }
}

export const showPopUpWindow = () => {
    return {
        type: SHOW_POP_UP_WINDOW
    }
}
export const hidePopUpWindow = () => {
    return {
        type: HIDE_POP_UP_WINDOW
    }
}
export const getChosenDate = (chosenDay) => {
    return {
        type: GET_CHOSEN_DAY,
        chosenDay
    }
}

export default CalendarReducer;