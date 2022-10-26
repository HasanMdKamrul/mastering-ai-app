import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import emailPicture from "../../assets/Images/Email/aerial-view-man-using-computer-laptop-wooden-table.jpg";
import "./Find.css";
const Find = () => {
  return (
    <div className="mx-auto container p-12">
      <h1 className="text-5xl flex justify-center font-extrabold dark:text-gray-200 text-center">
        We are located here
        <MdLocationOn />
      </h1>
      <div className="leaflet-container mx-auto container my-5 rounded-2xl">
        <MapContainer
          center={[23.7937, 90.4054]}
          zoom={100}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100 bg-gray-200 rounded-2xl shadow-2xl">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <span className="block mb-2 dark:text-violet-400">
              Mamba design system
            </span>
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              Let's Talk
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">
                Our team is always here to talk.
              </span>
              Let's together solve the real life problem.
            </p>
            <form
              noValidate=""
              action=""
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label htmlFor="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                  data-temp-mail-org="0"
                />
              </div>
              <button
                type="button"
                className="w-full flex justify-center items-center py-2 font-semibold rounded bg-violet-400 dark:bg-violet-400 dark:text-gray-900"
              >
                <MdEmail />
                Talk
              </button>
            </form>
          </div>
          <img
            src={emailPicture}
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Find;
