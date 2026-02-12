import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="flex flex-col justify-start items-start group 
               bg-white h-[600px]
               rounded-3xl shadow-2xl border-[12px] border-gray-200 relative pointer-events-none"
        id="main"
      >
        <p className="text-transparent text-2xl font-mono absolute -top-1 left-[50%] translate-x-[-50%] group-hover:-top-25 group-hover:text-black duration-200 ease-in">
          Wink Wink
        </p>
        <div
          className="bg-blue-600 rounded-xl shadow-md w-[400px] h-[400px] 
                 flex flex-row justify-center items-center gap-1
                 hover:scale-90 transition-all duration-300 z-50 mb-2 group pointer-events-auto"
        >
          {/* eyes */}
          <div className="bg-white w-45 h-45 rounded-full flex justify-center items-center">
            <div className="w-20 h-20 bg-black rounded-full group-hover:h-5 duration-300 ease-out "></div>
          </div>
          <div className="bg-white w-45 h-45 rounded-full flex justify-center items-center">
            <div className="w-20 h-20 bg-black rounded-full"></div>
          </div>
        </div>
        {/* eyes */}
        <div
          id="mouth"
          className=" w-[30%] h-[20%] rounded-[48px] bg-black mx-auto group-hover:w-[40%] duration-300 ease-out "
        ></div>
        <div
          id="mouthsec"
          className=" w-[32%] h-[15%] rounded-[60px] bg-white mx-auto absolute top-[400px] left-[50%] translate-x-[-50%] group-hover:w-[42%] duration-300 ease-out "
        ></div>
        <div className="w-10 h-12 bg-transparent rounded-b-4xl mx-auto absolute top-[490px] left-[50%] translate-x-[-50%] group-hover:bg-red-400 group-hover:top-[500px] duration-300 ease-out "></div>
      </div>
    </div>
  );
};

export default Home;
