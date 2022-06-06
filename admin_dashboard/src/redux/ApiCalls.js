import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    // "/auth/login", user: user is going to be from login page then pass them to the url
    const response = await publicRequest.post("/auth/login", user);
    //Sending data from login when user type in. EX: email and password
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
