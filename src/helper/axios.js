import axios from "axios";

const rootUrlApi = "http://localhost:5000/api/v1";
const categoriesEP = rootUrlApi + "/categories";
const userEP = rootUrlApi + "/user";
const productsEP = rootUrlApi + "/products";

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

// CATEGORIES API
export const getCategories = async () => {
  const url = categoriesEP;
  return apiProcessor({
    method: "get",
    url,
  });
};

// USER API
export const postUser = async (dataObj) => {
  const url = userEP;
  return apiProcessor({
    method: "post",
    url,
    dataObj,
  });
};

export const getUser = async (dataObj) => {
  const url = userEP + "/login";
  return apiProcessor({
    method: "post",
    url,
    dataObj,
  });
};

// products api

export const getProducts = async () => {
  const url = productsEP;
  return apiProcessor({
    method: "get",
    url,
  });
};

export const getSingleProduct = async (_id) => {
  const url = productsEP + "/" + _id;
  return apiProcessor({
    method: "get",
    url,
  });
};
