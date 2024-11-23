import React from "react";

export default function Cards() {
  return (
    <>
      <div className="flex sm:flex-row justify-center items-center">
        <div className="w-full sm:w-[48%] shadow-lg rounded-md">
          <div class="  rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFCfqQz5l5Sr0V8L4rfsefl4gMr8uvzZlHg&s"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex-col space-y-6 sm:w-[48%] shadow-lg rounded-md">
          <div className="max-w-sm w-full lg:max-w-full lg:flex ml-4">
            {/* Left Image Section */}
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
              }}
              title="Woman holding a mug"
            ></div>

            {/* Right Content Section */}
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* Badge Section */}
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>

                {/* Title Section */}
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>

              {/* Footer Section */}
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="data:image/png;base64,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"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm w-full lg:max-w-full lg:flex ml-4">
            {/* Right Content Section */}
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* Badge Section */}
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>

                {/* Title Section */}
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>

              {/* Footer Section */}
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-sm mr-4"
                  src="data:image/png;base64,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"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>

            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
              }}
              title="Woman holding a mug"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
