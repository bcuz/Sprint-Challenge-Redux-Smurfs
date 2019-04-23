import { 
  FETCH_DATA_START,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAILURE,
   ADD_FRIEND_SMURF, DELETE_SMURF_SUCCESS } 
from "../actions";

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
        error: null,
        fetchingSmurfs: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.smurfs
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.error
      };
    case ADD_FRIEND_SMURF:
      return {
        ...state,
        smurfs: action.smurfs
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.smurfs
      };
    default:
      return state;
  }
}

export default rootReducer;