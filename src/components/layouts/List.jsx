import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

// Images
import listOne from "../../assets/1.png";
import listTwo from "../../assets/2.png";
import listThree from "../../assets/3.png";
import listFour from "../../assets/4.png";
// Images

const List = () => {
  return (
    <>
      <Container className={"py-20"}>
        <Flex className={`gap-x-5`}>
          <div className=" ">
            <Image src={listOne} alt={"list1"} />
          </div>
          <div className="">
            <Image src={listTwo} alt={"list2"} />
            <div className="flex gap-x-5 mt-5.5">
              <div className="">
                <Image src={listThree} alt={"list3"} />
              </div>
              <div className="">
                <Image src={listFour} alt={"list4"} />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default List;
