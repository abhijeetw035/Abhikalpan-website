import Image from "next/image";
import React from "react";
import Navbr from "@/public/assets/Navbar.png";
import Union from "@/public/assets/Union.png";
import Logo from "@/public/assets/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex position-absolute sticky justify-center content-center flex-col p-0 m-0">
      <div className="bg-cyan-300 h-28 opacity-50 absolute w-full">.</div>
      <Image
        src={Logo}
        alt="logo"
        className="absolute top-[27%] left-[3.4%] w-[16%] max-w-[19rem]"
      />
      <div className="relative w-full">
        <Image
          src={Navbr}
          alt="logo"
          layout="responsive"
          className="p-4 w-full"
        />
        <div className="absolute top-[33%] md:gap-[2rem] md:right-[4rem] right-[7rem] flex gap-[1rem] lg:gap-[4rem] text-cyan-300 lg:text-lg 2xl:gap-[7rem] 2xl:text-3xl 2xl:right-[8rem]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/people">People</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="absolute top-[72%] right-[2%] flex gap-[4rem] text-cyan-300 pl-[10%] pr-[2%] w-full">
        <Image src={Union} alt="logo" className="p-0 opacity-50 w-full" />
      </div>
    </div>
  );
};

export default Navbar;
