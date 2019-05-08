import * as types from "./types";
import * as actions from "./actions";

type State = {
  loading: boolean;
  user: null | types.ApiUserObject;
};

type Action =
  | ReturnType<typeof actions.loggingIn>
  | ReturnType<typeof actions.login>
  | ReturnType<typeof actions.logout>
  | ReturnType<typeof actions.updateUser>;

export default (
  state: State = { loading: false, user: null },
  action: Action
) => {
  switch (action.type) {
    case actions.UPDATE_USER:
      return { ...state, loading: false, user: action.payload };
    case actions.LOG_IN:
      return { ...state, loading: false, user: action.payload };
    case actions.LOGGING_IN:
      return { ...state, loading: true, user: null };
    case actions.LOG_OUT:
      return { ...state, loading: false, user: null };
    default:
      return state;
  }
};
