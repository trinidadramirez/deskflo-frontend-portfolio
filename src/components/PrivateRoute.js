import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../pages/loginSlice";
import { getNewAccessToken } from "../api/userApi";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((state) => state.login);

  useEffect(() => {
    const replaceAccessToken = async () => {
      const result = await getNewAccessToken();
      result && dispatch(loginSuccess());
    };

    !sessionStorage.getItem("accessToken") &&
      localStorage.getItem("deskflo") &&
      replaceAccessToken();

    !isAuthorized &&
      sessionStorage.getItem("accessToken") &&
      dispatch(loginSuccess());
  }, [dispatch, isAuthorized]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuthorized ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
