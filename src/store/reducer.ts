import * as types from "./types";
import * as actions from "./actions";

type Action =
  | ReturnType<typeof actions.signingIn>
  | ReturnType<typeof actions.signIn>
  | ReturnType<typeof actions.signOut>
  | ReturnType<typeof actions.updateUser>;

export default (state: types.State = default_state(), action: Action) => {
  switch (action.type) {
    case actions.UPDATE_USER:
      return { ...state, loading: false, user: action.payload };
    case actions.SIGN_IN:
      return { ...state, loading: false, user: action.payload };
    case actions.SIGNING_IN:
      return { ...state, loading: true, user: null };
    case actions.SIGN_OUT:
      return { ...state, loading: false, user: null };
    default:
      return state;
  }
};

function default_state(): types.State {
  return { loading: false, user: null };
}
