import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-12">
        <div className="">
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
              <div className="mx-auto max-w-xl">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  Mock test.
                  <strong className="font-extrabold text-yellow-700 sm:block">
                    Improve your skills.
                  </strong>
                </h1>
                <p className="mt-4 sm:text-xl/relaxed">
                  Crack your next placement with series of practice and mock tests.
                </p>
                <div className="mt-8 gap-4">
                  <a
                    className="block w-1/3 text-center rounded-[30px] bg-slate-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500"
                    href=""
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center items-center ">
          <img 
            className="rounded-md w-[50rem]"
            src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-online-testing-background-vector-illustration-with-checklist-png-image_5084756.png"
            alt="quiz test"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
