import React from 'react';
import Header from '../components/header';

function SignUp() {
  return (
    <main>
      <Header />
      <div className="flex justify-center mt-32 w-full">
        <div className="bg-slate-50 text-black m-5 rounded-[25px] shadow-lg w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row p-8">

            {/* Form Column */}
            <div className="flex flex-col items-center lg:w-1/2 order-1 lg:order-1">
              <p className="text-2xl font-bold my-4">Register your School</p>

              {/* Input Fields */}
              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fas fa-school mr-3 text-lg"></i>
                <input
                  type="text"
                  placeholder="School Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fab fa-internet-explorer mr-3 text-lg"></i>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    placeholder="Domain"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full"
                  />
                  <span className="px-2 py-2 bg-slate-300 rounded-r border border-gray-300">
                    .wisdom.com
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fas fa-user mr-3 text-lg"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fas fa-user mr-3 text-lg"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fas fa-envelope mr-3 text-lg"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>

              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fas fa-lock mr-3 text-lg"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </div>

              {/* Submit Button */}
              <button className="mb-4 bg-[#611F69] hover:bg-[#481A54] text-white font-bold py-2 px-4 rounded-lg w-full max-w-xs">
                Next
              </button>
            </div>

            {/* Image Column */}
            <div className="flex justify-center items-center lg:w-1/2 order-1 lg:order-2">
              <img
                src="/images/hero.svg"
                alt="Hero"
                className="w-[500px] max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
