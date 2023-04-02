import { type NextPage } from "next";

import Link from "next/link";

const WeatherView: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
        <div className="container flex flex-col items-center justify-center gap-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            W<span className="text-amber-400">ea</span>ther
          </h1>

          <Link
            href={"/"}
            className="rounded border-b-4 border-amber-600 bg-amber-400 px-4 py-2 text-lg font-bold tracking-wider text-white hover:border-amber-500 hover:bg-amber-300"
          >
            Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default WeatherView;
