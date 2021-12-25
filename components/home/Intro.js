import React from "react";

const Intro = () => {
  return (
    <div
      className=" bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(54,54,54,0) 0%, rgba(50,50,50,0.4030147058823529) 100%)`,
      }}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap max-w-7xl">
          <section className="mb-3 md:w-2/5">
            <h2 className="sm:text-4xl text-3xl mb-2 text-gray-900 font-semibold title-font ">
              Revolution
            </h2>
            <p className=" text-sm sm-max:text-[0.85rem]">
              Advanced software, advanced research for advanced people
            </p>
          </section>
          <section className="md:w-3/5 md:pl-5">
            <p className="leading-relaxed text-base sm-max:text-sm">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded sm-max:text-[0.85rem]">
                Explore
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Intro;
