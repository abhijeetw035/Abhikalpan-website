import React from "react";

const Contact = () => {
  return (
    <>

      <p className="text-5xl font-aboro text-white text-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
