import Image from "next/image";
import Menu from "./components/menu";
import Footer from "./components/footer";
import logo from "./components/pngwing.com.png"


export default function Home() {
  return (<div className="bg-black w-screen h-[100vh] pt-6 flex flex-col items-center justify-center">
    <Image src={logo} className="w-32 h-32" alt="" ></Image>
    <Menu></Menu>
    <Footer></Footer>
  </div>
);
}
