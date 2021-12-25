import Link from "next/link";
import React from "react";
import Card from "../ui/ServiceCard";

const Services = (props) => {
  return (
    <div className="services mx-4">
      <div className="max-w-7xl mx-auto lg:px-4 md:grid-rows-1 mb-10 md:grid-cols-2">
        <div className="md:mt-10 my-6">
          <h1 className="text-md md:text-xl">What we can do?</h1>
          <h2 className=" text-md font-bold text md:text-2xl">
            Services we can help you with
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {props.servicesData.map((service) => (
            <Card service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
