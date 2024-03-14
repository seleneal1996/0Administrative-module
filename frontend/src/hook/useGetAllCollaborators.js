import { useState, useEffect } from "react";
import { getAllCollaborators } from "../services/bsg.service";

const useGetAllCollaborators = (callback) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCollaborators();
        setCollaborators(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [callback]);

  return { loading, error, collaborators };
};

export default useGetAllCollaborators;
