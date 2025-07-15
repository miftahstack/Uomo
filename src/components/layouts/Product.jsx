// React Icons
import { CiHeart } from "react-icons/ci";
// React Icons

import Image from "../Image";

const Product = (props) => {
  return (
    <>
      <div className="w-[305px] relative">
        <Image src={props.src} alt={props.alt} />
        <div className="flex items-center justify-between">
          <p className="text-txtColor">Dresses</p>
          <CiHeart />
        </div>
        <div className="flex flex-col justify-between pt-5">
          <p className="font-bold text-texProductColor">Cropped Faux Leather Jacket</p>
          <p className="text-textColor font-xl">$99.00</p>
        </div>
      </div>
    </>
  );
};

export default Product;
