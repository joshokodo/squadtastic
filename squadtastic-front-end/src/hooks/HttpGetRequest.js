import React, { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosGet = (url) => {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
      });

      useEffect(() => {
        setRequest({
          loading: true,
          data: null,
          error: false,
        });
    
        axios
          .get(url)
          .then((res) => {
            setRequest({
              loading: false,
              data: res.data,
            });
          })
          .catch(() => {
            setRequest({
              loading: false,
              data: null,
              error: true,
            });
          });
      }, [url]);

      return request
}