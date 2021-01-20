import * as actionTypes from "../store/action";
const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      console.log("hi");
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
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
