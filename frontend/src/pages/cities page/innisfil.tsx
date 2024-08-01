import CityContact from "./cityContact";

const Innisfil: React.FC = () => {
  const labelStyling = "max-[600px]:text-xl block text-xl font-medium";
  const inputStyling =
    "font-normal text-xl mt-1 block w-full px-3 py-1 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";

  const whyInnisfil = [
    "Waterfront Living",
    "Community Growth",
    "Outdoor Recreation",
    "Convenient Access",
    "Family-Friendly",
  ];

  return (
    <div className="flex min-h-screen flex-row overflow-hidden overflow-x-hidden bg-primary-yellow pt-[70px] text-2xl font-normal max-[600px]:flex-col">
      <div className="flex-2 mt-4 p-6">
        <h1 className="mb-4 text-4xl font-bold text-black">
          Discover the Natural Beauty of Innisfil, Ontario
        </h1>
        <p className="font-normal text-black">
          Located along the scenic shores of Lake Simcoe, Innisfil is a charming
          town known for its stunning natural landscapes and relaxed lifestyle.
          With its picturesque waterfront, outdoor recreational opportunities,
          and growing community, Innisfil is an ideal choice for those seeking a
          serene escape with urban conveniences.
        </p>

        <h1 className="my-4 text-3xl font-bold text-black">
          Why Choose Innisfil?
        </h1>
        <ul className="flex flex-wrap gap-5 leading-none">
          {whyInnisfil.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full flex-col place-content-center items-center bg-primary-blue p-6 text-white">
        <CityContact />
      </div>
    </div>
  );
};

export default Innisfil;
