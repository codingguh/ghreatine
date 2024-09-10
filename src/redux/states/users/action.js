import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../../utils/api";
import { notifications } from "@mantine/notifications";

const ActionType = {
  REGISTER_USER: "REGISTER_USER",
  GET_ALL_USERS: "GET_ALL_USERS",
};

function registerUserActionCreator(user) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  };
}

function getAllUsersActionCreator(users) {
  return {
    type: ActionType.GET_ALL_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await api.registerUser({ name, email, password });
      dispatch(registerUserActionCreator(user));
      notifications.show({
        title: "Registration Successful",
        message: "Your account has been created successfully!",
        position: "top-right",  // Ensure position is set here
      });
      return { status: "success" };
    } catch (error) {
      notifications.show({
        title: "Registration Failed",
        message: error.message || "Something went wrong. Please try again.",
        position: "top-right",  // Ensure position is set here
        color: "red",
      });
      return {
        status: "error",
        message: error.message || "Registration failed",
      };
    } finally {
      dispatch(hideLoading());
    }
  };
}


export {
  ActionType,
  registerUserActionCreator,
  getAllUsersActionCreator,
  asyncRegisterUser,
};
