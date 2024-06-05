import Image from "next/image";

export default function Home() {
  return (<div className="bg-black w-screen h-[100vh] flex items-center justify-center">
    <div className="w-[50vw] h-[50vh] bg-zinc-950 shadow-md rounded-lg flex items-center justify-center">
      <input className="w-[30vw] h-[5vh] text-gray-400"> Nome de usuário ou Email</input>
    </div>
  </div>
);
}
