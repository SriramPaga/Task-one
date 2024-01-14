import React from 'react';

function LazyLoadLogo() {
  return (
    <>
      <div className="container  flex flex-col justify-center items-center h-screen ">
        <img
          className="h-60 w-auto animate-pulse animate-infinite animate-ease-in-out "
          src="itsfoodLogo.png"
          alt="logo"
        />
        <h1 className="font-mono text-2xl ">Cooking in the Kitchen!</h1>
      </div>
    </>
  );
}

export default LazyLoadLogo;
