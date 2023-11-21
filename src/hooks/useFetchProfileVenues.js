import { useEffect, useState } from "react";
import { load } from "../api/token/load";

export function useFetchProfileVenues(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            ["Content-type"]: "application/json",
            Authorization: `Bearer ${load("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Something wrong happened.");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
