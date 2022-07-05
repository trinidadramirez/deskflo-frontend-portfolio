import axios from "axios";

const loginUrl = "http://localhost:3001/v1/user/login";
const userAccountUrl = "http://localhost:3001/v1/user";
const userLogoutUrl = "http://localhost:3001/v1/user/logout";
const newAccessTokenUrl = "http://localhost:3001/v1/token";

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, formData);
      resolve(res.data);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem(
          "deskflo",
          JSON.stringify({ refreshToken: res.data.refreshToken })
        );
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const getUser = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessToken = sessionStorage.getItem("accessToken");

      if (!accessToken) {
        reject("No token available");
      }
      const res = await axios.get(userAccountUrl, {
        headers: {
          Authorization: accessToken,
        },
      });
      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(userLogoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    });
  } catch (error) {}
};

export const getNewAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = JSON.parse(localStorage.getItem("deskflo"));

      if (!refreshToken) {
        reject("No token available");
      }
      const res = await axios.get(newAccessTokenUrl, {
        headers: {
          Authorization: refreshToken,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessToken", res.data.accessToken);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("deskflo");
      }
      reject(false);
    }
  });
};
