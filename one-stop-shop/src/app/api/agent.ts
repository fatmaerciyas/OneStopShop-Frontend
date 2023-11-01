import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:7049/api/";

const responseBody = (response: AxiosResponse) => response.data;

//Same thing as above
// function responseBodyFn(response: AxiosResponse) {
//   return response.data;
// }

//INTERCEPTOR
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("caught by interceptor");
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody), //url is string and bpdy is an object
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

//A REQUEST (specific for the Catalog)
const Catalog = {
  list: () => requests.get("Product"),
  details: (id: number) => requests.get(`Product/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("buggy/bad-request"),
  get401Error: () => requests.get("buggy/unauthorised"),
  get404Error: () => requests.get("buggy/not-found"),
  get500Error: () => requests.get("buggy/server-error"),
  getValidationError: () => requests.get("buggy/validation-error"),
};

// EXPORT OUR OBJECTS
const agent = {
  Catalog,
  TestErrors,
};

//Export it
export default agent;
