import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";

//Na toggle
const Nav = () => {
  const [open, setOpen] = useState(false);
  function hanldeClick() {
    setOpen((prev) => !prev);
  }
  return (
    <header
      className=" flex w-full  absolute p-9  z-10 items-center justify-center lg:justify-start lg:items-center"
      style={{ color: open ? "black" : "white" }}
    >
      <img src={logo} alt="logo" className="mr-10 self-center" />

      <div
        className={`${
          open
            ? "bg-black opacity-90 absolute top-0 left-0 bottom-0 right-0 h-screen"
            : "lg:bg-transparent bg-transparent"
        } lg:bg-transparent lg:h-auto lg:relative `}
      >
        <nav
          className={`${
            open ? "activate w-full py-8 lg:py-0 lg:w-auto  opacity-100 " : ""
          }`}
        >
          <ul
            className={
              open
                ? "flex justify-end mr-6   gap-6  font-semibold"
                : "flex  gap-6 font-semibold cursor-pointer"
            }
          >
            <li className="hover:underline underline-offset-8 decoration-2">
              home
            </li>
            <li className="hover:underline underline-offset-8 decoration-2">
              shop
            </li>
            <li className="hover:underline underline-offset-8 decoration-2">
              about
            </li>
            <li className="hover:underline underline-offset-8 decoration-2 ">
              contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute lg:hidden z-20 left-8 top-8">
        {open ? (
          <button onClick={hanldeClick}>
            <img src={close} alt="close" />
          </button>
        ) : (
          <button onClick={hanldeClick}>
            <img src={hamburger} alt="open" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Nav;
