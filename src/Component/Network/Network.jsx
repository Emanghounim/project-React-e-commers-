import React, { useEffect, useState } from 'react';

export default function useNetwork() {
  const [isLode, setIsLode] = useState(true);

  function callOnline() {
    window.addEventListener("online", function online() {
      setIsLode(true);
    });

    window.addEventListener("offline", function offline() {
      setIsLode(false);
    });
  }

  useEffect(() => {
  
 
        callOnline();
    }, 5000);

 

  return (
    <>
      {isLode ? (
        <div className="network">
          <i className='fa fa-wifi text-success'></i> You are Online
        </div>
      ) : (
        <div className="network">
          <i className='fa fa-wifi text-danger'></i> You are offline
        </div>
      )}
    </>
  );
}
