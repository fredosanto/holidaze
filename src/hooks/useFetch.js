import { useEffect, useState } from "react";
import { API } from "../api/enpoints";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const errorUrl = `${API.venues.id(undefined).$}?_owner=true&_bookings=true`;

  useEffect(() => {
    async function fetchData() {
      try {
        if (url === errorUrl) {
          return;
        }
        const response = await fetch(url);

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
