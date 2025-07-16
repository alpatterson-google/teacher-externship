import LaurenImage from '../../../assets/lauren_roanzarrella.jpg';

const LaurenRoanZarrella = () => {
  return (
    <div className="max-w-sm mx-auto bg-red-100 rounded-lg shadow-md overflow-hidden border-2 border-gray-500">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <img 
            src={LaurenImage} 
            alt="Lauren Roan Zarrella" 
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
          />    
    
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Lauren Roan Zarrella</h2>
          <p className="text-gray-600 text-center mb-4">
            Middle School Teacher & Taco Lover
          </p>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Location:</span>
              <span className="text-gray-800">Austin, TX</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Experience:</span>
              <span className="text-gray-800">10+ years at Del Valle Middle School</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Specialization:</span>
              <span className="text-gray-800">Social Skills for Special Education</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-3">
            <a 
              href="https://www.dvisd.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              DVISD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaurenRoanZarrella;