import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-100">
      <div className="shadow-2xl bg-white mx-10">
        <nav className="mx-10  flex  justify-between justfiy-center items-center justfiy-center items-center">
          <h2 className="font-bold text-4xl">sneakers</h2>
          <ul className="md:flex justfiy-center items-center hidden justfiy-center items-center space-x-10 text-gray-400 text-2xl ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex justfiy-center items-center justfiy-center items-center space-x-10">
            <span>
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                  className="text-gray-500"
                />
              </svg>
            </span>
            <span className="py-5">
              <Image
                src="/images/image-avatar.png"
                width={80}
                height={80}
                alt="profile"
              />
            </span>
          </div>
        </nav>
        <hr />
        <div className=" m-20  p-10 md:flex md:space-x-20 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/image-product-1-thumbnail.jpg"
              width={500}
              height={500}
              alt="profile"
              className="rounded-lg"
            />
            <div className="mt-5 flex">
              <span className="px-3">
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-lg "
                />
              </span>

              <span className="px-3">
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-lg "
                />
              </span>
              <span className="px-3">
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-lg "
                />
              </span>
              <span className="px-3">
                <Image
                  src="/images/image-product-1-thumbnail.jpg"
                  width={200}
                  height={200}
                  alt="profile"
                  className="rounded-lg "
                />
              </span>
            </div>
          </div>
          <div className="leading-10 my-10">
            <p className="text-sm text-orange-500 font-bold">SNEAKER COMPANY</p>
            <h1 className="font-bold text-4xl mt-3">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 leading-7 mt-10">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a duraction rubber outer sole. they will withstand
              everything the weather can offer.
            </p>
            <p className="font-bold text-black">
              $250.00 <span className="text-orange-500 px-5">50%</span>
            </p>
            <p className="text-gray-300">$250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
