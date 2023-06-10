import footerLogo from "../assets/Icon/awesomeIconTwo.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-900 md:p-12 p-6">
      <div className="md:flex justify-between">
        <div className="flex justify-center items-center mb-5 md:mb-0 flex-col">
          <img className="md:w-36 w-24" src={footerLogo} alt="" />
          <h1 className="text-white font-semibold md:text-xl text-lg">
            <span className="text-xl font-bold text-green-500 uppercase">
              Photo
            </span>
            Awesome
          </h1>
        </div>
        <div>
          <div className="mt-5 md:mt-0">
            <h1 className="md:text-xl text-base font-bold text-white border-b-2 uppercase">
              Categorys
            </h1>
            <ul className="text-sm text-white">
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Outdoor Sports
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Team Sports
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Individual Sports
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Water Sports
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Ball Sports
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-gray-400"
              >
                Adventure and Exploration
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mt-5 md:mt-0">
            <h1 className="md:text-xl text-base font-bold text-white border-b-2 uppercase">
              Support
            </h1>
            <ul className="text-sm text-white">
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                Contact
              </li>
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                FAQs
              </li>
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                Shipping
              </li>
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                Returns
              </li>
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                Terms
              </li>
              <li className="my-3 hover:underline cursor-pointer text-gray-400">
                Privacy
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[30%] w-full mt-5 md:mt-0">
          <h1 className="md:text-xl text-base font-bold text-white border-b-2 uppercase">
            Contact Us
          </h1>
          <div className="flex md:flex-row flex-col mt-5">
            <input
              type="text"
              className="h-10 w-full md:w-auto rounded-full py-2 px-4 focus:outline-none border-none"
              name=""
              placeholder="Email Here"
              id=""
            />
            <button className="h-10 mt-3 md:mt-0 bg-red-600 py-2 px-4 rounded-full md:ml-2 hover:bg-transparent hover:border-red-600 hover:border-2 text-white">
              Subscribe
            </button>
          </div>
          <div className="md:mt-10 mt-5">
            <h1 className="uppercase mb-3 border-b-2 font-bold md:text-xl text-base text-white">
              Social Media
            </h1>
            <div className="text-gray-500 flex">
              <FaGoogle className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaFacebook className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaInstagram className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaTwitter className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaLinkedin className="mr-3 md:text-xl text-lg cursor-pointer" />
            </div>
            <div className="text-white mt-5">
              <h1 className="uppercase mb-3 border-b-2 font-bold md:text-xl text-base text-white">
                Address :
              </h1>
              <h1 className="font-bold">123,XYZ Road, BD</h1>
              <p className="text-gray-500">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-green-500 mt-5">
        Copy Right 2023 || All Rights Reseverd
      </p>
    </div>
  );
};

export default Footer;
