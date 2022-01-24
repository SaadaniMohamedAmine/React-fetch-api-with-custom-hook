import { useState, useEffect } from "react";

//custom hook to fetch api with react
const useFetch = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("start");
  const fetchData = async () => {
    setStatus("fetching");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const info = await response.json();
      setData(info);
      setStatus("fetched");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { status, data };
};
export default useFetch;
