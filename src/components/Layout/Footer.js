import React from "react";
import { ReactSVG } from "react-svg";
const Footer = () => {

  return (

    <div className="bg-white-300  pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-16 grid grid-col grid-cols-12 gap-4">
        <div className=" col-start-1 col-end-5 flex flex-col ">

          <ReactSVG src="./assets/Logo.svg" beforeInjection={(svg) => {
            svg.setAttribute('class', 'h-8 w-auto mb-8');
          }} />
          <p className="mb-8">
            <strong className="font-bold font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex flex-row -mx-2 mb-8">
            <div className="flex rounded-full bg-white-500 p-2 shadow-md items-center mx-2">
              <ReactSVG src="./assets/Icon/facebook.svg" beforeInjection={(svg) => {
                svg.setAttribute('class', 'h6 w6');
              }} />
            </div>
            <div className="flex rounded-full bg-white-500 p-2  shadow-md items-center mx-2">
              <ReactSVG src="./assets/Icon/twitter.svg" beforeInjection={(svg) => {
                svg.setAttribute('class', 'h6 w6');
              }} />
            </div>
            <div className="flex rounded-full bg-white-500 p-2  shadow-md items-center mx-2">
              <ReactSVG src="./assets/Icon/instagram.svg" beforeInjection={(svg) => {
                svg.setAttribute('class', 'h6 w6');
              }} />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - LaslesVPN</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>

    </div>


  );

};


export default Footer;