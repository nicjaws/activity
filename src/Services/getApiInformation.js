import axios from "axios";

export const getApiInformation = ({ array, setArray }) => {
  const API = "http://www.boredapi.com/api/activity/";

  axios.get(API).then((response) => {
    const { data } = response;
    array.push(data);
    setArray(array);
  });
};
