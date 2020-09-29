const SET_PREV_MONTH = "CalendarReducer/SET_PREV_MONTH";
const SET_NEXT_MONTH = "CalendarReducer/SET_NEXT_MONTH";

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
    monthDays: []
}

const CalendarReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PREV_MONTH:
            return {
                ...state, date: new Date(state.date.getFullYear(),state.date.getMonth() - action.month),
                monthDays: []
            }
        case SET_NEXT_MONTH:
            return {
                ...state, date: new Date(state.date.getFullYear(),state.date.getMonth() + action.month),
                monthDays: []
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

export default CalendarReducer;