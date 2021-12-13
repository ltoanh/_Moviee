import React, { useEffect } from 'react'
import movieeApi from 'api-config/moiveeApi';

function Catalog() {

  useEffect(() => {
    const getListPopular = async () => {
      let response = await movieeApi.movie.getPopularList({params: {}});
      console.log(response);
    };

    getListPopular();
  }, []);

  
  return (
    <div>
      catalog
    </div>
  )
}

export default Catalog

/**
 * Quan ly state voi ELT extract - load - transform
 */
