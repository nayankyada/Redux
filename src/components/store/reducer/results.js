import * as actionTypes from "../action";
const initialState = {
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value })
      };
    case actionTypes.DELETE_RESULT:
      //const id = 1;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return {
        ...state
      };
  }
};
export default reducer;
