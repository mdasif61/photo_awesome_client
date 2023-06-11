import footerLogo from "../assets/Icon/awesomeIconTwo.png";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-900 md:p-12 p-6">

      <div className="md:flex justify-evenly border-b-2 border-green-800 pb-5 bg-opacity-40 items-center mb-10">
        <div className="flex justify-center items-center mb-5 md:mb-0 flex-col">
          <img className="md:w-36 w-24" src={footerLogo} alt="" />
          <h1 className="text-white font-semibold md:text-xl text-lg">
            <span className="text-xl font-bold text-green-500 uppercase">
              Photo
            </span>
            Awesome
          </h1>
        </div>
        <div className="flex md:flex-row flex-col mt-5">
          <input
            type="text"
            className="h-10 w-full md:w-auto py-2 px-4 focus:outline-none border-none"
            name=""
            placeholder="Email Here"
            id=""
          />
          <button className="h-10 mt-3 md:mt-0 bg-green-600 py-2 px-4 md:ml-2 hover:bg-transparent hover:border-green-600 hover:border-2 text-white">
            Subscribe
          </button>
        </div>
      </div>

      <div className="md:flex justify-between">
        <div>
          <div className="mt-5 md:mt-0">
            <h1 className="md:text-xl border-green-400 text-base font-bold text-green-500 border-b-2 uppercase">
              Learn
            </h1>
            <ul className="text-sm text-white">
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Landscape Photography
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Portrait Photography
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Architectural Photography
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Wildlife Photography
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Documentary Photography
              </li>
              <li
                className="my-3 hover:underline cursor-pointer
                           text-green-200"
              >
                Street Photography
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mt-5 md:mt-0">
            <h1 className="md:text-xl border-green-400 text-base font-bold text-green-500 border-b-2 uppercase">
              Support
            </h1>
            <ul className="text-sm text-white">
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                Contact
              </li>
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                FAQs
              </li>
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                Shipping
              </li>
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                Returns
              </li>
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                Terms
              </li>
              <li className="my-3 hover:underline cursor-pointer text-green-200">
                Privacy
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[30%] w-full mt-5 md:mt-0">
          <h1 className="md:text-xl text-base font-bold text-green-500 border-green-400 border-b-2 uppercase">
            Contact Us
          </h1>
          <div>
            <h1 className="flex items-center my-2 text-green-200"> <FaEnvelopeOpen className="mr-2" />photoawesome@gmail.com</h1>
            <h1 className="flex items-center my-2 text-green-200"> <FaPhone className="mr-2" />+880125445533</h1>
          </div>
          <div className="md:mt-10 mt-5">
            <h1 className="uppercase mb-3 border-b-2 border-green-400 font-bold md:text-xl text-base text-green-500">
              Social Media
            </h1>
            <div className="text-green-200 flex">
              <FaGoogle className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaFacebook className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaInstagram className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaTwitter className="mr-3 md:text-xl text-lg cursor-pointer" />
              <FaLinkedin className="mr-3 md:text-xl text-lg cursor-pointer" />
            </div>
            <div className="text-white mt-5">
              <h1 className="uppercase mb-3 border-b-2 border-green-400 font-bold md:text-xl text-base text-green-500">
                Address :
              </h1>
              <h1 className="font-bold text-green-200">123,XYZ Road, BD</h1>
              <p className="text-green-200">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-green-200 mt-5">
        Copy Right 2023 || All Rights Reseverd
      </p>
    </div>

  );
};

export default Footer;
