import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <main>
      <Header />
      <div className="flex justify-center mt-32 w-full">
        <div className="bg-slate-50 text-black m-5 rounded-[25px] shadow-lg w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row p-8">

            {/* Form Column */}
            <div className="flex flex-col items-center lg:w-1/2 order-1 lg:order-1">
              <p className="text-2xl font-bold mt-4">Let's get you to School</p>
              <p className='my-4'>Enter your School's Wisdom domain</p>
              {/* Input Fields */}


              <div className="flex items-center mb-4 w-96 max-w-lg">
                <i className="fab fa-internet-explorer mr-3 text-lg"></i>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    placeholder="School domain"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full"
                  />
                  <span className="px-2 py-2 bg-slate-300 rounded-r border border-gray-300">
                    .wisdom.com
                  </span>
                </div>
              </div>



              {/* Submit Button */}
              <button className="mb-4 bg-[#611F69] hover:bg-[#481A54] text-white font-bold py-2 px-4 rounded-lg w-full max-w-xs">
                Next
              </button>
              <Link to="">
                <p className='text-[13px] text-blue-400'>Forgotten your Wisdom URL?</p>
              </Link>
            </div>

            {/* Image Column */}
            <div className="flex justify-center items-center lg:w-1/2 order-1 lg:order-2">
              <img
                src="/images/hero.svg"
                alt="Hero"
                className="w-80 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
