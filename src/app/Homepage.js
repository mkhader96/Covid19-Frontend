"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function HomePage() {
  const [worldData, setWorldData] = useState(null);
  const [country, setCountries] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/world/total")
      .then((response) => response.json())
      .then((data) => setWorldData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.covid19api.com/country/${country}/status/confirmed?from=${StartDate}T00:00:00Z&to=${EndDate}T00:00:00Z`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  };
  console.log(country);

  return (
    <>
      <section className="min-h-screen w-full min-w-full">
        <div className="text-center">
          <h1 className=" text-[#000] font-bold py-10 text-2xl font-mono">
            World Total Statistics
          </h1>
          {worldData && (
            <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-3 md:grid:cols-2 lg:grid-cols-3">
              <h1 className="bg-[#E7497A] px-5 py-5 p-0 m-auto text-[#fff] rounded text-lg">
                Total Confirmed: {worldData.TotalConfirmed}
              </h1>
              <h1 className="bg-[#E7497A] px-5 py-5  p-0 m-auto text-[#fff] rounded text-lg">
                Total Deaths: {worldData.TotalDeaths}
              </h1>
              <h1 className="bg-[#E7497A] px-5 py-5  p-0 m-auto text-[#fff] rounded text-lg">
                Total Recovered: {worldData.TotalRecovered}
              </h1>
            </div>
          )}
          <h1 className="font-bold text-2xl font-mono">Get Statistics for a specific country</h1>
          <div className="m-0 p-5">
            <form className="space-x-3" onSubmit={handleSubmit}>
              <input
                value={country}
                onChange={(event) => setCountries(event.target.value)}
                type="text"
                className="border border-[#CCCCCC] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md rounded"
              ></input>
              <input
                value={StartDate}
                onChange={(event) => setStartDate(event.target.value)}
                type="date"
                className="border border-[#CCCCCC] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md rounded"
              ></input>
              <input
                value={EndDate}
                onChange={(event) => setEndDate(event.target.value)}
                type="date"
                className="border border-[#CCCCCC] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md rounded"
              ></input>

              <button
                type="submit"
                className="border border-[#3E54AC] bg-[#3E54AC] hover:bg-[#576CBC] text-[#fff] py-1 px-2 rounded"
              >
                <div className="flex justify-between">Search
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg></div>
              </button>
            </form>

            <div className="gap grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4">
              {data.map((items) => (
                <div className="border border-l-[10px] border-l-[#E7497A] py-5 m-10 my-10 shadow-2xl">
                  <h3 className="font-bold text-lg text-[#E7497A]">
                    {items.Date}
                  </h3>
                  <p className="text-gray-700 m-7">
                    Number of Confirmed Cases: {items.Cases}
                  </p>
                  <div className="border-b-2 border-dashed border-[#454545]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
