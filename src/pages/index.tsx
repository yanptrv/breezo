import { type NextPage } from "next";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchWeather = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <input
        placeholder={"Search"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (input !== "") {
              router.push(`/${input}`);
            }
          }
        }}
        className="w-60 rounded-2xl border-2 border-white bg-blue-300 px-3 py-1 text-3xl text-white placeholder-slate-100 outline-none"
      />
      <Link
        href={`/${input}`}
        className="rounded border-b-4 border-amber-600 bg-amber-400 px-4 py-2 text-lg font-bold tracking-wider text-white hover:border-amber-500 hover:bg-amber-300"
      >
        Click
      </Link>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
        <div className="container flex flex-col items-center justify-center gap-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Br<span className="text-amber-400">ee</span>zo
          </h1>
          <SearchWeather />
        </div>
      </main>
    </>
  );
};

export default Home;
