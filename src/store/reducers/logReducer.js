import { UPDATE_LOG } from '../actions/updateLog';

const logReducer = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_LOG :
      let new_state = [
         ...state,
         {
          inputValue: action.payload.inputValue,
          inputUnits: action.payload.inputUnits,
          outputUnits: action.payload.outputUnits,
          outputValue: action.payload.outputValue,
          student: action.payload.student,
          error: action.payload.error,
          result: action.payload.result
        }
      ];
      return new_state;
    default :
      return state
  };
};

export default logReducer;
