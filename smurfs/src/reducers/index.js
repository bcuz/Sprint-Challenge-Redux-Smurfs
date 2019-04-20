import { FETCH_DATA_SUCCESS } from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const defaults = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {  
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        // error: "",
        fetchingData: false,
        smurfs: action.smurfs
      };

    default:
      return state;
  }
}

export default rootReducer;