import actionTypes from "../Action/actionTypes";

const initialState = {
  start: false,
  success: false,
  students: [],
  fail: false,
  errorMessage: "",
};

const StudentsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STUDENTS_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        start: false,
        success: true,
        students: action.payload,
      };
    case actionTypes.FETCH_STUDENTS_FAIL:
      return {
        ...state,
        start: false,
        fail: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default StudentsListReducer;
