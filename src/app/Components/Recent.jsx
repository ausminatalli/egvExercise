import GlobalButton from "./Globalbutton";
const { default: Image } = require("next/image");

export const Recent = () => {
  // Define array of recently added items
  const recentItems = [
    {
      src: "/recently added/close-up-friends-hanging-out.png",
      category: "Health",
      title: "Social Connection Can Help Recover From Stress",
      date: "Oct 23, 2023"
    },
    {
      src: "/recently added/female-hiker-with-backpack-outstretching-her-arms-mountains.png",
      category: "Well-Being",
      title: "5 Ways Sports Can Transform Your Health",
      date: "Oct 23, 2023"
    },
    {
      src: "/recently added/people-working-as-team-company.png",
      category: "Beauty",
      title: "The Latest Discoveries In Beauty Surgeries",
      date: "Oct 23, 2023"
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center items-center mt-2">
        <h2 className="text-[#1bbf7d] text-2xl font-semibold mt-4 lg:text-4xl"> Recently Added</h2>
        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-10">
            {/* Map over the recentItems array and render each item */}
            {recentItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Image
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  width={480}
                  height={333}
                  objectFit="cover"
                />
                <h2 className="text-md lg:text-2xl text-green-600">{item.category}</h2>
                <p className="text-lg lg:text-3xl text-black font-bold">{item.title}</p>
                <p className="text-md lg:text-2xl text-gray-200">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
        <GlobalButton bgColor="[#f5f5f5]" textColor="[#1bbf7d]" text="Discover more" />
      </div>
    </div>
  );
};
