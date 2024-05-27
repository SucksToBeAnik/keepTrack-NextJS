import { BsPatchExclamation } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div className="navbar bg-white max-w-2xl xl:max-w-3xl my-4 rounded-xl p-4 fixed hidden lg:block">
      <div className="flex justify-between w-full">
        <div className="avatar">
          <div className="w-12 rounded-full shadow">
            <Image src="/idea.png" alt="Logo" fill />
          </div>
        </div>

        <ul className="menu menu-horizontal rounded-box bg-base-200">
          <li>
            <Link href="/" className="tooltip tooltip-bottom" data-tip="Home">
              <IoHomeOutline className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="/about" className="tooltip tooltip-bottom" data-tip="About us">
              <BsPatchExclamation className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="/profile" className="tooltip tooltip-bottom" data-tip="Profile">
              <Avatar />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
