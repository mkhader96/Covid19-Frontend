'use client'

import { useEffect } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2'


export default function Countries() {

    const [Countries, setCountries] = useState([]);


    useEffect(() => {
        const countries = async () => {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setCountries(data.Countries);
        };
        countries();
    }, []);


    const handleAddMyRecords = async (country) => {
        try{
            const data = {
                CountryName: country.Country,
                
                Date: country.Date,
                
                
            };
            const response = await fetch(
                `https://covid19backend.vercel.app/api/CreateRecord/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
            );
            Swal.fire(
                '',
                'This Country has been add to your records',
                'success'
              )
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }




    return (
        <>
            <section className="min-h-screen">
                <div className="text-center">
                    <h1 className="font-bold p-5 text-2xl">COVID19 Statistics for All countries</h1>
                    <div className="gap grid sm:grid-cols-4 md:grid-cols-4 grid-cols-4">
                        {Countries.map((summary) => (
                            <div className="py-[15px] m-[40px] p-5 border border-l-[#E6497B] border-l-[10px] shadow-xl font-bold	">
                                <h1 className="text-[#E6497B]   font-bold text-2xl">Country: {summary.Country}, {summary.CountryCode}</h1>
                                <div className="py-5 text-[15px] p-2 my-5">
                                    <h1 className="py-2">Total Confirmed cases: {summary.TotalConfirmed} </h1>
                                    
                                    <h1 className="py-2">Total Deaths cases: {summary.TotalDeaths}</h1>
                                    <h1 className="py-2">Total Recovered cases: {summary.TotalRecovered}</h1>
                                    <h1 className="py-2">Date: {summary.Date}</h1>
                                </div>
                                <div className="border-b-2 border-dashed border-[#454545]"></div>
                                <button onClick={() => handleAddMyRecords(summary)} className="border border-[#3E55C4] bg-[#3E55C4] px-2 py-3 m-3 rounded-lg text-[#fff] hover:bg-[#576CBC]">Add To My records</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}