import CityContact from "./cityContact";

const EastGwillimbury: React.FC = () => {
  const labelStyling = 'max-[600px]:text-xl block text-xl font-medium';
  const inputStyling = 'font-normal text-xl mt-1 block w-full px-3 py-1 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

  const whyEastGwillimbury = ['Natural Beauty', 'Community Growth', 'Family-Oriented', 'Green Spaces', 'Convenient Access'];

  return (
    <div className='flex flex-row max-[600px]:flex-col pt-[70px] text-2xl overflow-hidden min-h-screen bg-primary-yellow font-normal overflow-x-hidden'>
      <div className="flex-2 p-6 mt-4">
        <h1 className="text-4xl font-bold mb-4 text-black">Discover the Growing Community of East Gwillimbury, Ontario</h1>
        <p className="text-black font-normal">
          East Gwillimbury is a thriving community known for its blend of rural charm and modern growth. With its expanding amenities, beautiful landscapes, and strong community spirit, East Gwillimbury offers a high quality of life in a scenic setting.
        </p>

        <h1 className="text-3xl font-bold my-4 text-black">Why Choose East Gwillimbury?</h1>
        <ul className="flex gap-5 flex-wrap leading-none">
          {whyEastGwillimbury.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>

      <div className="w-full p-6 bg-primary-blue text-white  flex flex-col place-content-center items-center">
        <CityContact />
      </div>
    </div>
  );
};

export default EastGwillimbury;
