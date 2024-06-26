import React from "react";
import ProyectHome from "../assets/videogamesHome.png";
import ProyectLanding from "../assets/videogamesLanding.png";
import inProgress from "../assets/inProgress.jpg";
import testapp from "../assets/test-app.png";
import loginApp from "../assets/login.jpg";
import listUsers from "../assets/listUsers.jpg";
import Harryimg from "../assets/Harryimg.jpg"
import HarryApp from "../assets/Harrylanding.jpg"
import Svelt from "../assets/svelte.jpg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent proyects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ProyectLanding})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <iframe
              src="https://www.youtube.com/embed/t6lC4yzAeh4?fs=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ backgroundImage: `url(${listUsers})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <iframe
              src="https://www.youtube.com/embed/Q-GmSZmdQ9s?fs=1"
              // webKitAllowFullScreen
              // mozAllowFullScreen
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ backgroundImage: `url(${HarryApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <iframe
              src="https://www.youtube.com/embed/reVdrDEpbsI?fs=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ backgroundImage: `url(${Svelt})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" text-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Svelt project - In progress
              </span>

              <div className="pt-8">
                <a href="https://ba5f10c7.alerts-app.pages.dev/" target="_blank" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
