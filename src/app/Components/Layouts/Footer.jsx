import Image from "next/image";
import React from "react";

const Footer = () => {
  const linksData = [
    {
      title: "Trending Topics",
      url: "/trending",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Health Care",
      url: "/healthcare",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Well-Being",
      url: "/well-being",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Beauty",
      url: "/beauty",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Medical Cases",
      url: "/medical-cases",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
  ];

  const linksData2 = [
    {
      title: "Doctor Advises",
      url: "/doctor-advises",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Events & Exhibitions",
      url: "/events",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "The Journal",
      url: "/journal",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Research Center",
      url: "/research",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
    {
      title: "Media Center",
      url: "/media",
      imageSrc: "/right-arrow-svgrepo-com.svg",
    },
  ];

  const linksData3 = [
    {
        "title": "Terms & Conditions",
        "description": "Read our terms and conditions.",
        "url": "/terms",
        "imageSrc": "/right-arrow-svgrepo-com.svg"
      },
      {
        "title": "Privacy Policy",
        "description": "Learn about our privacy policy.",
        "url": "/privacy",
        "imageSrc": "/right-arrow-svgrepo-com.svg"
      },
      {
        "title": "Site Map",
        "description": "Navigate through our site map.",
        "url": "/sitemap",
        "imageSrc": "/right-arrow-svgrepo-com.svg"
      },
      {
        "title": "Contact Us",
        "description": "Contact us for any inquiries.",
        "url": "/contact",
        "imageSrc": "/right-arrow-svgrepo-com.svg"
      },
      {
        "title": "Careers",
        "description": "Explore career opportunities.",
        "url": "/careers",
        "imageSrc": "/right-arrow-svgrepo-com.svg"
      }
  ];

  return (
    <div>
      <div className="w-full h-full bg-[#00205b]  flex flex-col justify-around  lg:flex-row text-white p-10 gap-4">
        <div className="flex flex-col justify-between gap-8 w-full lg:w-2/5">
          <Image src="/helo-logo.png" alt="logo" width={150} height={150} />
          <p className=" font-thin lg:w-1/2 w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <p className="px-4">Powered by</p>
          <img src={'https://www.cactix.com/wp-content/uploads/american-dubai.png'} width={150} height={150} className="mb-0 md:mb-24 px-0"/>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-around">
          <div>
            <h2 className="mb-4 mt-6 text-lg">Quick Links</h2>
            <div className="flex gap-20 text-sm font-thin">
              <div className="flex flex-col gap-2 w-40">
                {linksData.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex rounded hover:bg-blue-900 py-2 px-1 cursor-pointer justify-between"
                  >
                    <div>
                      <p className="">{link.title}</p>
                    </div>
                    <img
                      src={link.imageSrc}
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-48">
                {linksData2.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex rounded hover:bg-blue-900 py-2 px-1 cursor-pointer justify-between"
                  >
                    <div>
                      <p className="">{link.title}</p>
                    </div>
                    <img
                      src={link.imageSrc}
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <h2 className="mb-4 mt-6 text-lg">Information</h2>
              <div className="flex gap-20 text-sm font-thin">
                <div className="flex flex-col gap-2 w-48">
                {linksData3.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex rounded hover:bg-blue-900 py-2 px-1 cursor-pointer justify-between"
                  >
                    <div>
                      <p className="">{link.title}</p>
                    </div>
                    <img
                      src={link.imageSrc}
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
                
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <p className="text-lg font-normal"> Follow Us</p>
              <div className="flex gap-3">
                {" "}
                <Image
                  src="/youtube.svg"
                  className="cursor-pointer"
                  alt="youtube"
                  width={20}
                  height={20}
                />
                <Image
                  src="/facebook.svg"
                  className="cursor-pointer"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/instagram.svg"
                  className="cursor-pointer"
                  alt="instagram"
                  width={24}
                  height={24}
                />
                <Image
                  src="/linkedin.svg"
                  className="cursor-pointer"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:h-12   bg-[#04286a]">
        <div className="flex justify-between text-white text-xs	 md:text-sm font-light	px-8 py-3 md:py-3">
          <div>
            &copy;2023 RGB All rights reserved.Designed & Developed by EGV
          </div>{" "}
          <div>Copyrights &copy; RGB,ALL Rights Reserved</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
