import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-teal-400 to-teal-900 text-white min-h-screen py-12 flex justify-center items-center">
      <div className="">
        <p className="text-5xl font-aboro text-white text-center ">
          Contact Us
        </p>
        <p className=" left-[83vh] text-l text-white text-center mt-3 mb-1">
          For any queries regarding section mentioned feel free to contact.
        </p>
        <div className="flex flex-wrap gap-8 box-border justify-center m-10">
          <div className="relative w-[22vw] h-[29vh]">
            {/* Image Container */}
            <Image
              src="/images/Register.png"
              alt="card1"
              width="300"
              height="300"
              className="object-cover"
            />

            {/* Text Overlay */}
            <p className="absolute top-[24px] left-[120px] text-[13px] text-[#0F595B]">
              Event Coordinator
            </p>

            {/* Name */}
            <h2 className="absolute top-[30%] left-6 text-xl text-[#0F595B] font-bold">
              Chetan Anand Jhariya
            </h2>

            {/* Contact Details */}
            <div className="absolute top-[55%] left-6 flex flex-col gap-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  alt="Phone Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">+91 70009 47461</p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Group.png"
                  alt="Email Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">22bme021@iiitdmj.ac.in</p>
              </div>
            </div>
          </div>
          <div className="relative w-[22vw] h-[29vh]">
            {/* Image Container */}
            <Image
              src="/images/Register.png"
              alt="card1"
              width="300"
              height="300"
              className="object-cover"
            />

            {/* Text Overlay */}
            <p className="absolute top-[24px] left-[120px] text-[13px] text-[#0F595B]">
              Event Coordinator
            </p>

            {/* Name */}
            <h2 className="absolute top-[30%] left-6 text-xl text-[#0F595B] font-bold">
              Chetan Anand Jhariya
            </h2>

            {/* Contact Details */}
            <div className="absolute top-[55%] left-6 flex flex-col gap-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  alt="Phone Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">+91 70009 47461</p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Group.png"
                  alt="Email Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">22bme021@iiitdmj.ac.in</p>
              </div>
            </div>
          </div>
          <div className="relative w-[22vw] h-[29vh]">
            {/* Image Container */}
            <Image
              src="/images/Register.png"
              alt="card1"
              width="300"
              height="300"
              className="object-cover"
            />

            {/* Text Overlay */}
            <p className="absolute top-[24px] left-[120px] text-[13px] text-[#0F595B]">
              Event Coordinator
            </p>

            {/* Name */}
            <h2 className="absolute top-[30%] left-6 text-xl text-[#0F595B] font-bold">
              Chetan Anand Jhariya
            </h2>

            {/* Contact Details */}
            <div className="absolute top-[55%] left-6 flex flex-col gap-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Vector.png"
                  alt="Phone Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">+91 70009 47461</p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Group.png"
                  alt="Email Icon"
                  width="20"
                  height="20"
                />
                <p className="text-sm text-[#333]">22bme021@iiitdmj.ac.in</p>
import card from "@/public/images/Register.png";
import phone from "@/public/images/Vector.png";
import email from "@/public/images/Group.png";

export default function ContactUs() {
  const contacts = [
    {
      name: "Chetan Anand Jhariya",
      role: "Event Coordinator",
      phone: "+91 70009 47461",
      email: "22bme021@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
    {
      name: "Sankalp",
      role: "Event Coordinator",
      phone: "+91 84096 46129",
      email: "22bme051@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
    {
      name: "Dr. Yashpal Singh Katharria",
      role: "Faculty Incharge",
      phone: "+91 81075 91910",
      email: "yashpalk@iiitdmj.ac.in",
      cardImage: card,
      callIcon: phone,
      emailIcon: email,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-800 via-teal-600 to-teal-400 px-6 py-12">
      <h1 className="text-5xl font-bold text-white mb-4">CONTACT US</h1>
      <p className="text-lg text-teal-100 mb-12">
        For any queries regarding any section mentioned, feel free to contact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="relative w-full h-80 p-6 flex flex-col justify-between bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${contact.cardImage.src})`,
                backgroundSize: "contain", 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-11 right-20 text-teal-900 px-3 py-1 rounded-lg text-sm">
              {contact.role}
            </div>
            <h2 className="text-2xl font-bold text-white mt-auto mb-20">
              {contact.name}
            </h2>
            <div className="space-y-2 mb-10">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/images/Vector.png"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-white">{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/Group.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-white">{contact.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
