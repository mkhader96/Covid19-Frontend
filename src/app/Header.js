import Link from "next/link";
import Logo from "./Images/Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div>
        <div>
          <div className="bg-[#3C57C0] text-center p-[30px]">
            <Link
              href="/"
              className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-6 lg:-ml-2"
            >
              <h1 className="text-[#000] font-black	 text-6xl">
                COVID
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  className="inline-block"
                  href="/"
                />
              </h1>
            </Link>

            <h1 className=" py-5 font-normal text-[#fff] font-mono text-3xl">
              Covid19 Statistics
            </h1>
            <p className="text-[#fff] text-lg">
              A website to provide you with all the updates on Covid-19
              statistics around the world
            </p>
          </div>
          <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 bg-[#333333] px-14">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-[#fff] pt-4 md:pt-0  ">
                <li>
                  <Link
                    href="/"
                    className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-4 px-7 lg:-ml-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Countries"
                    className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-4 px-7 lg:-ml-2"
                  >
                    All Countries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/MyRecords"
                    className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-4 px-7  lg:-ml-2"
                  >
                    My Records
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
