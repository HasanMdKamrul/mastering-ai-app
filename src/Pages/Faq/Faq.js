import React from "react";
import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const faqs = useLoaderData();
  console.log(faqs);
  return (
    <section className="bg-gray-200  text-slate-900 mt-5 shadow-2xl mx-auto container rounded-2xl">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          {faqs.map((f) => (
            <div key={f.id}>
              <h3 className="font-semibold">{f?.question}</h3>
              <p className="mt-1 text-gray-400">{f?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
