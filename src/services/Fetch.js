import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url, depen, odd = false) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  const [pagination, setPagination] = useState([]);
  const key = localStorage.getItem('l-token');
  const { REACT_APP_DOMAIN } = process.env;
  useEffect(() => {
    (async () => {
      try {
        setLoadingData(true);
        const response = await axios.get(`${REACT_APP_DOMAIN}${url}`, {
          headers: { authorization: key, Accept: 'application/json' },
        });
        if (response.data.status === 'success') {
          if (odd) {
            setData(response.data.message);
            console.log(response.data.message, 'message');
            return;
          }
          setData(response.data.data);
          setPagination(response.data);
          return;
        } else {
          setError(response.data.message);
          return;
        }
      } catch (err) {
        setError(err.response.data.message);
        // if ((err.response.status) === 401) {
        //     logoutHandler();
        //     return;
        // }
        setError(err.response.data.errors);
      } finally {
        setLoadingData(false);
      }
    })();

    return () => {
      setData([]);
    };
  }, [url, ...depen]);
  return { data, error, loadingData, pagination };
}
