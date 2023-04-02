import { type NextPage } from "next";

import { api } from "~/utils/api";
import { LoadingSpinner } from "~/componenets/loadingSpinner";

const Home: NextPage = () => {
  const hello = api.development.hello.useQuery();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Br<span className="text-amber-400">ee</span>zo
          </h1>

          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <LoadingSpinner size={50} />
        </div>
      </main>
    </>
  );
};

export default Home;
