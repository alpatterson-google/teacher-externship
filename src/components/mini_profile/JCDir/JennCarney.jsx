import albertImage from '../../../assets/Me.jpg';

const JenniferCarney = () => {
  return (
    <div className="max-w-sm mx-auto bg-green-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="bg-green-100 flex flex-col items-center">
          <img 
            src={albertImage} 
            alt="Jennifer Carney" 
            className="w-32 h-32 triange-full object-cover mb-4 border-4 border-green-800"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Jennifer Carney</h2>
          <p className="text-gray-600 text-center mb-4">
            CTVI and SpEd Teacher
          </p>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-blue-500">
              <span className="text-black-600 font-bold">Location:</span>
              <span className="text-gray-800">Pflugerville, TX</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-500">
              <span className="text-black-600 font-bold">Years of Service:</span>
              <span className="text-gray-800">17 Rotations Around the Sun</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-black-600 font-bold">Certifications:</span>
              <span className="text-gray-800 text-center">General Education EC-4, Special Education EC-12, ESL, Certified Teacher of Students with Visual Impairments, Braille, National Board for Professional Teaching Standards Certified</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-3">
            <a 
              href="https://www.linkedin.com/in/jennifer-carney-88702b1b5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-yellow-750 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JenniferCarney;