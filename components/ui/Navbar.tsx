import Image from "next/image";
import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <div className="navbar bg-white max-w-2xl xl:max-w-3xl my-4 rounded-xl p-4 fixed hidden lg:block">
      <div className="flex justify-between w-full">
        <div className="avatar">
          <div className="w-12 rounded-full shadow">
            <Image src="/idea.png" alt="Logo" fill />
          </div>
        </div>

        <Menubar />
      </div>
    </div>
  );
};

export default Navbar;
