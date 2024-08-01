import CityContact from "./cityContact";

const RichmondHill: React.FC = () => {
  const labelStyling = 'max-[600px]:text-xl block text-xl font-medium';
  const inputStyling = 'font-normal text-xl mt-1 block w-full px-3 py-1 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

  const whyRichmondHill = ['Elegant Living', 'Green Spaces', 'Cultural Diversity', 'Educational Opportunities', 'Strategic Location'];

  return (
    <div className='flex flex-row max-[600px]:flex-col pt-[70px] text-2xl overflow-hidden min-h-screen bg-primary-yellow font-normal overflow-x-hidden'>
      <div className="flex-2 p-6 mt-4">
        <h1 className="text-4xl font-bold mb-4 text-black">Discover the Elegance of Richmond Hill, Ontario</h1>
        <p className="text-black font-normal">
          Richmond Hill is a vibrant city known for its upscale neighborhoods, diverse community, and abundant green spaces. Combining suburban tranquility with urban convenience, Richmond Hill offers a high quality of life in a picturesque setting.
        </p>

        <h1 className="text-3xl font-bold my-4 text-black">Why Choose Richmond Hill?</h1>
        <ul className="flex gap-5 flex-wrap leading-none">
          {whyRichmondHill.map((item, index) => (
            <li key={index} className="text-lg">{item}</li>
          ))}
        </ul>
      </div>

      <div className="w-full p-6 bg-primary-blue text-white flex flex-col place-content-center items-center">
        <CityContact />
      </div>
    </div>
  );
};

export default RichmondHill;
