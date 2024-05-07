const { default: Image } = require("next/image");

export const MainHead = () => {
  return (
    <div className="bg-[#00205b] w-full">
      <div className="flex justify-between py-2 flex-col md:flex-row gap-3 md:gap-0">
        <div className="text-white flex  gap-4  items-center">
          <Image src="./email.svg" width={30} height={30} alt="email" />
          <p>sayhellow@helo.com</p>
          <Image src="./phone.svg" width={30} height={30} alt="phone" />
          <p>+971 55 889 00987</p>
        </div>
        <div className="flex gap-4 items-center px-4">
        <Image
                  src="/youtube.svg"
                  className="cursor-pointer"
                  alt="youtube"
                  width={30}
                  height={30}
                />
                <Image
                  src="/facebook.svg"
                  className="cursor-pointer"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                <Image
                  src="/instagram.svg"
                  className="cursor-pointer"
                  alt="instagram"
                  width={40}
                  height={40}
                />
                <div className="border bg-[#264681] rounded-lg px-6 py-1 text-white flex gap-1 items-center justify-between  ">
                  <p>Login</p>
                  <Image
                  src="/person.svg"
                  className="cursor-pointer"
                  alt="person"
                  width={40}
                  height={40}
                />
                </div>
                <button className="text-white text-lg font-bold">عربي</button>

        </div>
      </div>
    </div>
  );
};
