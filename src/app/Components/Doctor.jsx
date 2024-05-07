import Image from "next/image";

export const Doctor = () => {
  return (
    <div className="bg-[#1bbf7d] w-full relative  mt-20 p-2">
      <div className="flex  lg:justify-between p-0 md:px-12  ">
        <div className="absolute bottom-0 right-0 md:bottom-0 md:left-0 w-1/3">
          <Image
            src={"/doctor call-to-action/1640758580ABDULLAHALHAJIWEB copy.png"}
            layout="Responsive"
            width={560}
            height={400}
          />
        </div>
        <div className="w-0 md:w-1/3 "></div>
        <div className="w-1/2">
          <h2 className=" md:text-md text-sm lg:text-4xl p-4 text-white font-bold">
            Got A Back Pain Or Need Special Treatments?
          </h2>

          <p className=" md:text-sm text-xs lg:text-3xl p-4 text-white font-thin ">
            DR. Abdullah Alhaji Discussing Back Pain And Its Treatments
          </p>
          <button className="p-2 text-sm md:text-md lg:p-4 bg-white text-green-500 rounded-lg font-bold ">Watch Videos</button>
        </div>
        <div className="p-0 lg:pt-10 hidden lg:block">
          <div>
            <Image
              src={
                "/doctor call-to-action/medical-assistant-helping-patient-with-physiotherapy-exercises.png"
              }
              width={560}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
