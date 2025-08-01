// Own Components
import Image from "../Image";
import Logo from "../../assets/logo.svg";
import Flex from "../Flex";
import Container from "../Container";
import { Link } from "react-router";
// Own Components

// React Icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
// React Icon

const Footer = () => {
  return (
    <>
      <footer className="px-6 py-12 E4E4E4">
        <Container>
          <Flex className="justify-between items-start ">
            <div className="">
              <Image className={`pb-7.5`} src={Logo} as={"logo.png"} />

              <p className="text-base ">1418 River Drive, Suite 35 Cottonball, CA 96222</p>
              <p className="text-base pb-7.5">United States</p>

              <p className="">sale@uomo.com</p>

              <p className="pb-7.5">
                <a href="tel:+12463450695" className="">
                  +1 246-345-0695
                </a>
              </p>

              <div className="flex gap-x-5">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaYoutube />
                <FaPinterest />
              </div>
            </div>
            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="flex flex-col space-y-2 text-sm">
                 <Link to="/">
                  <div className="relative group inline-block">
                    <li >About Us</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                 <Link to="/">
                  <div className="relative group inline-block">
                    <li >Careers</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                 <Link to="/">
                  <div className="relative group inline-block">
                    <li >Affiliates</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                 <Link to="/">
                  <div className="relative group inline-block">
                    <li >Blog</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                 <Link to="/">
                  <div className="relative group inline-block">
                    <li >Contact US </li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
              </ul>
            </div>

            {/* SHOP */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SHOP</h3>
              <ul className="flex flex-col gap-y-2 text-sm">
                <Link to="/">
                  <div className="relative group inline-block">
                    <li >New Arrival</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                
                <Link to="/">
                  <div className="relative group inline-block">
                    <li >Accessories</li>
                    <div className="absolute inline-block mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block ">
                    <li className="inline">Men</li>
                    <div className="absolute mt-1  bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li >Women</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li >Shop All</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>

              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="text-lg font-semibold mb-4">HELP</h3>
              <ul className="flex flex-col gap-y-2 text-sm ">
                <Link to="/">
                  <div className="relative group inline-block">
                    <li >Customer Service</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li>My Account</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li>Find a Store</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li>Legal & Privacy</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li>Contact</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="relative group inline-block">
                    <li>Gift Card</li>
                    <div className="absolute mt-1 bg-black h-[2px] bottom-0 w-0 group-hover:w-full duration-300 transition-all"></div>
                  </div>
                </Link>

              </ul>
              <ul className="space-y-2 text-sm">






              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
              <p className="text-sm mb-4">Get updates about our latest trends and promotions.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded text-black w-full sm:w-auto"
                />
                <button className="bg-white text-black px-4 py-2 cursor-pointer rounded hover:bg-gray-200 transition">
                  JOIN
                </button>

              </form>
            </div>
          </Flex>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-4">
            <p>©2020 Uomo</p>
            <div className="flex items-center gap-6 mt-2 md:mt-0">
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Language</span>
                <span className="font-medium">United Kingdom</span>
                <span className="mx-1">|</span>
                <span className="font-medium">English</span>
                <span>▴</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Currency</span>
                <span className="font-medium">$ USD</span>
                <span>▴</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
