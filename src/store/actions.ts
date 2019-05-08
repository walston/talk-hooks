import { ApiUserObject } from "./types";

export const UPDATE_USER: "UPDATE_USER" = "UPDATE_USER";
export const updateUser = (user: ApiUserObject) => ({
  type: UPDATE_USER,
  payload: { ...user }
});

export const LOG_IN: "LOG_IN" = "LOG_IN";
export const login = (user: ApiUserObject) => ({
  type: LOG_IN,
  payload: { ...user }
});

export const LOG_OUT: "LOG_OUT" = "LOG_OUT";
export const logout = () => ({
  type: LOG_OUT
});

export const LOGGING_IN: "LOGGING_IN" = "LOGGING_IN";
export const loggingIn = () => ({
  type: LOGGING_IN
});
