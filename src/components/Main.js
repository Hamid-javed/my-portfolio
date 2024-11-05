import React from 'react';
import myImage from './../assets/home.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Typewriter from './Typewriter';

function Main() {
    return (
        <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#ec6e59] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="name before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#20262E]">Hamid</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
                        I am passionate about building websites and web applications. With a degree in Software Engineering from KFUEIT, I have honed my technical skills through diverse projects, both individually and in teams. I have built end-to-end web applications using technologies such as JavaScript, React.JS, Next.JS, Bootstrap, Tailwind CSS, Node.JS, Git, MongoDB, and MySQL.
                    </p>
                </div>
                <div className="flex justify-center items-center py-[10px] sm:mt-0 mt-[-30px] sm:pr-0 sm:justify-between sm:flex-col relative w-full">
                    <img
                        src={myImage}
                        alt="main"
                        className="h-auto w-full max-w-[400px] sm:max-w-[300px] lg:max-w-[400px] object-cover"
                    />
                </div>
                <div className="flex place-content-center mt-7 ">
                    <div className="flex flex-row sm:flex-col gap-4">
                        <a rel="noreferrer" href="https://www.linkedin.com/in/hamid-javed-3b3990327/" target="_blank">
                            <AiFillLinkedin size={40} className="cursor-pointer hover:scale-125 transition duration-300" />
                        </a>
                        <a rel="noreferrer" href="https://github.com/Hamid-javed" target="_blank">
                            <AiFillGithub size={40} className="cursor-pointer hover:scale-125 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
