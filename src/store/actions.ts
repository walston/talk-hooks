import { useState, useContext, useEffect } from "react";

import { UserObject } from "./types";
import { getUser } from "../api";
import { Context, store } from "./index";

export const UPDATE_USER: "UPDATE_USER" = "UPDATE_USER";
export const updateUser = (user: UserObject) => ({
  type: UPDATE_USER,
  payload: { ...user }
});

export const SIGN_IN: "SIGN_IN" = "SIGN_IN";
export const signIn = (user: UserObject) => ({
  type: SIGN_IN,
  payload: { ...user }
});

export const SIGN_OUT: "SIGN_OUT" = "SIGN_OUT";
export const signOut = () => ({
  type: SIGN_OUT
});

export const SIGNING_IN: "SIGNING_IN" = "SIGNING_IN";
export const signingIn = () => ({
  type: SIGNING_IN
});

export const logIn$ = ({ username = "", password = "" }) => {
  const dispatch = store.dispatch;
  dispatch(signingIn());
  getUser(username + password)
    .then(user => {
      dispatch(signIn(user));
    })
    .catch(error => {
      dispatch(signOut());
      console.error(error);
    });
};

export const logOut$ = () => {
  const dispatch = store.dispatch;
  dispatch(signOut());
};

export function useAccountManagement() {
  const store = useContext(Context);
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState());
    });
  }, [store, setState]);

  return state.user;
}
