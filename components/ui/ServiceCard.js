import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <Link
      passHref
      key={props.service.id}
      href={`/products/${props.service.name}`}
    >
      <article
        className="relative w-full sm-max:h-64 h-[19rem] bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out cursor-pointer"
        style={{ backgroundImage: `url(${props.service.photo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>

        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center group ">
          <div className="text-white text-2xl font-bold text-center h-full w-full flex items-center justify-center group-hover:hidden">
            {props.service.title}
          </div>
          <div className="absolute w-full h-full hidden group-hover:block text-white  transition animate-slideOver p-4">
            {props.service.desc}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
