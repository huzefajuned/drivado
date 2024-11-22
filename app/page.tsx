import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col justify-around h-screen w-screen ">
      <Header />
      <section className="bg-gray-500 backdrop-blur-sm w-11/12 shadow-2xl rounded-3xl h-full m-auto flex flex-col justify-start my-5 items-center">
        <h2 className="bg-white p-4 rounded-xl">User management & Company management </h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        inventore assumenda sunt voluptatem quidem tenetur praesentium non
        minima error neque. Velit, veritatis odit et dicta minus quaerat ipsum
        corrupti asperiores!
        </p>
      </section>
    </div>
  );
}
