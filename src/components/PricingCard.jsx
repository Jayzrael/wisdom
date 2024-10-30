import React from 'react';

const PricingCard = () => {
  return (
    <div className="pt-5 text-black mt-24" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight  sm:text-5xl">
            Explore our prices to see where your budget fits - we've got you covered.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ">
          Choose the product that works best
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First Product */}
          <div className="ring-1 ring-black rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 ">Product Type 1</h2>
            </div>
            <p className="mt-4 text-sm leading-6 ">Product details for Product Type 1</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight ">€ 10 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product1"
              className="bg-black text-white  mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon /> 40 units
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> 1 feature
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> Fast delivery
              </li>
            </ul>
          </div>

          {/* Second Product */}
          <div className="bg-white/5 ring-2 ring-[#481A54] rounded-3xl p-8 xl:p-10">
            <div className="flex items-baseline justify-between gap-x-4">
              <h2 id="product2" className="text-lg font-semibold leading-8 ">Product Type 2</h2>
              <p className="rounded-full bg-[#481A54] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 ">
              The most popular choice. Product details for Product Type 2
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight ">€ 20 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product2"
              className="bg-[#481A54]  shadow-sm hover:bg-[#481A54] focus-visible:outline-[#481A54] mt-6 block rounded-md py-2 px-3 text-center text-white text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon /> 120 units
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> 3 different features
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> Fast delivery
              </li>
            </ul>
          </div>

          {/* Third Product */}
          <div className="ring-1 ring-black rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product3" className="text-lg font-semibold leading-8 ">Product Type 3</h2>
            </div>
            <p className="mt-4 text-sm leading-6 ">Product details for Product Type 3</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight ">€ 50 / unit</span>
            </p>
            <a
              href="/order"
              aria-describedby="product3"
              className="bg-black text-white   focus-visible:outline-black mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Order Now
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6  xl:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon /> 240 units
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> 6 different features
              </li>
              <li className="flex gap-x-3">
                <CheckIcon /> Fast delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// CheckIcon component (can replace with any SVG icon or library component)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none ">
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

export default PricingCard;
