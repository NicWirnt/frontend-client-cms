import axios from "axios";

const rootUrlApi = "http://localhost:5000/api/v1";
const categoriesEP = rootUrlApi + "/categories";
const userEP = rootUrlApi + "/user";
const productsEP = rootUrlApi + "/products";
const stripeEP = rootUrlApi + "/create-payment-intent";

const apiProcessor = async ({ method, url, dataObj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
    });

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

export const getProductByCat = async (_id) => {
  const url = categoriesEP + "/" + _id;
  return apiProcessor({
    method: "get",
    url,
  });
};

export const getPaymentIntent = async (item) => {
  const url = stripeEP;
  return apiProcessor({
    method: "post",
    url,
  });
};
