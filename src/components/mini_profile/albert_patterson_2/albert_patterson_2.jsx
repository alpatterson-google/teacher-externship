import albertImage from '../../../assets/albert_patterson.jpg';

const AlbertPatterson2 = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <img 
            src={albertImage} 
            alt="Albert Patterson 222" 
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Albert Patterson 22222</h2>
          <p className="text-gray-600 text-center mb-4">
            Software Developer & Tech Enthusiast
          </p>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Location:</span>
              <span className="text-gray-800">Round Rock, TX</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">Experience:</span>
              <span className="text-gray-800">7+ years</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Specialization:</span>
              <span className="text-gray-800">Fullstack Development and Cloud Infrastructure and Monitoring</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-3">
            <a 
              href="https://www.linkedin.com/in/apattersoncmu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbertPatterson2;