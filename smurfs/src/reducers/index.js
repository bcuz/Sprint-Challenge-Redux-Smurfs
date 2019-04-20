import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   error: null
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
 }
*/

const defaults = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {  
    case FETCH_DATA_START:
      return {
        ...state,
        // error: "",
        fetchingSmurfs: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        // error: "",
        fetchingSmurfs: false,
        smurfs: action.smurfs
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default rootReducer;