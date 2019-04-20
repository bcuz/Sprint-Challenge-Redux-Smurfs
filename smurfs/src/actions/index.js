import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      
      dispatch({type: FETCH_DATA_SUCCESS, smurfs: res.data})
    })
    // .then(res => console.log(res))
    .catch(err => dispatch({type: FETCH_DATA_FAILURE, error: err.message}))
  }

export const ADD_FRIEND_SMURF = "ADD_FRIEND_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";

export const addSmurf = newSmurf => dispatch => {
  // console.log(newSmurf);
  
  axios
  .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      // console.log(res);
      
      dispatch({type: ADD_FRIEND_SMURF, smurfs: res.data})
    })
}  

export const deleteSmurf = id => dispatch => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      
      dispatch({type: DELETE_SMURF_SUCCESS, smurfs: res.data})
    })
}