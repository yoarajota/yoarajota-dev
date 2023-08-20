import api from "../api/axios";

export async function verifyToken() {
  try {
    return await api
      .post("api/verify", null, {})
      .then((res) => {
        if (res.status === 200) {
          return true;
        }
      })
      .catch(() => {
        return false;
      });
  } catch (error) {
    return false;
  }
}
