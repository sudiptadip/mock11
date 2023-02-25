import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./Action.Type";

const initData = {
  data: [],
  isLoading: false,
  isError: false,
  color: [{"color1" : "blue", "color2": "black",}]
};

export default function AppReducer(state = initData, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        isError: false,
      };
    case "CHENGE_TO_LITE" : return {
      ...state,
      color: [{"color1" : "blue", "color2": "black", color3 : "white"}]
    }
    case "CHENGE_TO_DARK" : return {
      ...state,
      color: [{"color1" : "green", "color2": "white", color3 : "black"}]
    }
    default:
      return state;
  }
}
