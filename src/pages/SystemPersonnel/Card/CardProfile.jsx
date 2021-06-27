import React from "react";

export default function CardProfile({personnel}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNuiVd8VltYqjCmE0GNJcMAtd7dvutNvpt-Ru7nJz2UC2oaZy_4nfrhzjqZ42ESnA1vE&usqp=CAU"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-10">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {personnel.firstName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {personnel.lastName}
            </div>
            <div className="mb-5 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {personnel.email}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
