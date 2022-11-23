import axios from "axios";

const rootUrlApi = "http://localhost:8000/api/v1/client";
const categoriesEP = rootUrlApi + "/category";

const apiProcessor = async ({ method, url, dataObj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
    });
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getCategories = async () => {
  const url = categoriesEP;
  return apiProcessor({
    method: "get",
    url,
  });
};
