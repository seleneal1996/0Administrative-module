import { useState, useEffect } from "react";
import { getAllContracts } from "../services/bsg.service";

const useGetAllContractors = (callback) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllContracts();
        setContractors(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [callback]);

  return { loading, error, contractors };
};

export default useGetAllContractors;
