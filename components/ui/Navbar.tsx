import Image from "next/image";
import Menubar from "./Menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-white max-w-2xl xl:max-w-3xl my-4 rounded-xl p-4 fixed hidden lg:block">
      <div className="flex justify-between w-full">
        <Link href="/" className="flex justify-start items-center gap-2">
          <Image src="/idea.png" width={50} height={50} alt="Logo" className="shadow-xl rounded-full p-2 bg-dark" />
          <p className="text-2xl font-bold text-dark">Keep<span className="text-[#F37925]">Track</span></p>
        </Link>

        <Menubar />
      </div>
    </div>
  );
};

export default Navbar;
