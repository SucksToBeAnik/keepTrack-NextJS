import { BsPatchExclamation } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import Avatar from "./Avatar";

const Menubar = () => {
  return (
    <ul className="menu menu-horizontal rounded-box bg-base-200">
      <li>
        <Link href="/" className="tooltip tooltip-bottom" data-tip="Home">
          <IoHomeOutline className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="tooltip tooltip-bottom"
          data-tip="About us"
        >
          <BsPatchExclamation className="h-5 w-5" />
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className="tooltip tooltip-bottom"
          data-tip="Profile"
        >
          <Avatar />
        </Link>
      </li>
    </ul>
  );
};

export default Menubar;
