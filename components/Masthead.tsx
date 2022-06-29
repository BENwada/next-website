import React from "react";
import Image from "next/image";

const Masthead = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-12 font-bold">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development,</span> <span>done right.</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
