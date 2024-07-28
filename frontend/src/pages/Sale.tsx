import React from 'react';

const Sale = () => {
  return (
    <div>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">1</div>
        <div className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
        <div className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
        <div className="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
      </div>
    </div>
  );
};

export default Sale;
