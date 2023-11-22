import { useEffect, useState } from "react";
import axios from "axios";

const useFilesData = (filteredFileName = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = filteredFileName
          ? `http://localhost:3000/file/data?fileName=${filteredFileName}`
          : "http://localhost:3000/files/data";

        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [filteredFileName]);

  return { data, loading, error };
};

export default useFilesData;
