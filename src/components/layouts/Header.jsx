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
import { Link } from "react-router";
// React Icon

const Header = () => {
  return (
    <>
      <section>
        <Container>
          <Flex className={`justify-around py-5 `}>
            <div className="flex justify-between items-center gap-x-10">
                <Link to='/'>
              <Image src={Logo} alt={"logo.svg"} 
              />  </Link>

              <ul className="flex gap-x-5">
                <Link to='/'>
                  <li className="uppercase">Home</li>
                </Link>
                <Link to='/'>
                  <li className="uppercase">Shop</li>
                </Link>
                <Link to='/'>
                  <li className="uppercase">Collection</li>
                </Link>
                <Link to='/'>
                  <li className="uppercase">Journal</li>
                </Link>
                <Link to='/'>
                  <li className="uppercase">Lookback</li>
                </Link>
                <Link to='/'>
                  <li className="uppercase">pages</li>
                </Link>
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
