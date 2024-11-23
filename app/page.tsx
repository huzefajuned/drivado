import Header from "@/app/components/Header";
import Tabs from "@/app/components/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <section className="  w-11/12  h-[80%] m-auto flex flex-col p-2 my-5 items-center">
        <h2 className="bg-white p-4 text-2xl rounded-xl font-bold">
          User management & Company management{" "}
        </h2>
        <Tabs/>
      </section>
    </div>
  );
}
