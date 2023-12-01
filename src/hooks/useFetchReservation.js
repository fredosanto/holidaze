// import { API } from "../enpoints";
import { useEffect, useState } from "react";
import { load } from "../api/token/load";

export function useFetchReservation(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getReservation() {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            ["Content-Type"]: "application/json",
            Authorization: `Bearer ${load("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Something went wrong fetching reservation");
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

    getReservation();
  }, [url]);

  return { data, isLoading, error };
}
