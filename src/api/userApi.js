import axios from "axios";

const loginUrl = "http://localhost:3001/v1/user/login";

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
