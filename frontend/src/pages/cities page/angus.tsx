import CityContact from "./cityContact";

const Angus: React.FC = () => {
  const labelStyling = 'max-[600px]:text-xl block text-xl font-medium';
  const inputStyling = 'font-normal text-xl mt-1 block w-full px-3 py-1 bg-gray-50 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500';

  const whyAngus = ['Scenic Beauty', 'Family-Friendly Atmosphere', 'Convenient Location', 'Affordable Living', 'Strong Community Spirit'];

  return (
    <div className='flex flex-row max-[600px]:flex-col pt-[70px] text-2xl overflow-hidden min-h-screen bg-primary-yellow font-normal overflow-x-hidden'>
      <div className="flex-2 p-6 mt-4">
        <h1 className="text-4xl  font-bold mb-4 text-black ">Discover the Charm of Angus, Ontario</h1>
        <p className="text-black font-normal">
          Nestled in the heart of Simcoe County, Angus offers a unique blend of rural tranquility and modern convenience. This picturesque town is renowned for its welcoming community, lush landscapes, and exceptional quality of life. Whether you're seeking a peaceful retreat or a family-friendly neighborhood, Angus has something to offer.
        </p>

        <h1 className="text-3xl font-bold my-4 text-black ">Why Choose Angus?</h1>
        <ul className="flex gap-5 flex-wrap leading-none">
          {whyAngus.map((item, index) => (
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

export default Angus;
