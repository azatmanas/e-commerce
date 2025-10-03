import { USER_ACTION_TYPES } from "./user.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer";

export const checkUserSession = withMatcher(() =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher((user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
export const googleSignInStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const signUpStart = withMatcher((email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  })
);

export const emailSignInStart = withMatcher((email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher((user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher((error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpSuccess = withMatcher((user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher((error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher((error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
