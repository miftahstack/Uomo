import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.svg";

// React Icon
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
// React Icon

const Header = () => {
  return (
    <>
      <section>
        <Container>
          <Flex className={`justify-around py-5 `}>
            <div className="flex justify-between items-center gap-x-10">
              <Image src={Logo} alt={"logo.svg"} />
              <ul className="flex gap-x-5">
                <li className="uppercase">Home</li>
                <li className="uppercase">Shop</li>
                <li className="uppercase">Collection</li>
                <li className="uppercase">Journal</li>
                <li className="uppercase">Lookback</li>
                <li className="uppercase">pages</li>
              </ul>
            </div>

            <div className="flex gap-x-5 text-2xl">
              <CiSearch />
              <CiUser />
              <CiHeart />
              <IoBagOutline />
              <HiMiniBars3CenterLeft />
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
