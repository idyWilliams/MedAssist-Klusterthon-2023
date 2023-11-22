import axios from "axios";

// const KEY = import.meta.env.VITE_REACT_APP_API_KEY;
export const BASEURL =
  import.meta.env.VITE_REACT_APP_BASE_URL || "";

export const api = {
  users: {

  },

};

export const makePostRequest = async (
  data: unknown,
  url: string,
  // includeAuthHeader: boolean = true
) => {
  return await axios.post(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};



export const makeDeleteRequest = async <T = unknown>(
  url: string,
  // includeAuthHeader: boolean = true
) => {
  return await axios.delete<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};



export const makePostRequestWithCustomHeaders = async (
  data: unknown,
  url: string,
  // headers?: unknown
) => {
  const temp = await fetch(`${BASEURL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      "x-access-token": localStorage.getItem("accessToken") as string,
      // ...headers,
    },
    body: JSON.stringify(data),
  });

  if (!temp.ok) {
    throw new Error(await temp.text());
  }

  const result = await temp.json();
  return result;
};



export const makePatchRequest = async (
  data: unknown,
  url: string,
  // includeAuthHeader: boolean = true
) => {
  return await axios.patch(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};
export const makePutRequest = async (
  data: unknown,
  url: string,
  // includeAuthHeader: boolean = true
) => {
  return await axios.put(`${BASEURL}${url}`, data, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
};

export const makeGetRequest = async <T = unknown>(
  url: string,
  // includeAuthHeaders: boolean = true
) => {
  const temp = await axios.get<T>(`${BASEURL}${url}`, {
    headers: {
      "x-access-token": localStorage.getItem("accessToken") as string,
    },
  });
  return temp;
};