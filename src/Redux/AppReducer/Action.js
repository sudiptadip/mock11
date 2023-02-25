import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./Action.Type";

export const GetData = (url) => (dispatch) => {
  dispatch({ type: GET_REQUEST});
  return axios
    .get(
      url,
    )
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type:  GET_FAILURE});
    });
};