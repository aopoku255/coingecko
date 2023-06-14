import axios from "../../app/axios";

export const fetchSearch = async () => {
  try {
    const response = await axios.get("/search/trending");
    return response;
  } catch (error) {
    console.log(error);
  }
};
