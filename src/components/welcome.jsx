const Welcome = () => {
  return (
    <div className="flex">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to Goggle! 🎉
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-indigo-600">
              Dear Educators,
            </p>
            
            <p>
              We are absolutely <span className="font-semibold text-blue-600">thrilled</span> to have you here with us today! 
              Your visit means the world to us, and we couldn't be more excited to share how we collaborate, 
              innovate, and work together to solve meaningful problems.
            </p>
            
            <p>
              We're <span className="font-semibold text-green-600">delighted</span> to help you create engaging materials 
              that you'll take back to your students. Our hope is that these resources will spark curiosity, 
              ignite passion, and inspire the next generation to pursue the exciting and rewarding world of technology.
            </p>
            
            <p>
              Technology has the power to change lives, solve global challenges, and create incredible opportunities. 
              Through your dedication as educators, you're helping shape the future innovators, creators, and 
              problem-solvers who will make our world better.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mt-8">
              <p className="text-xl font-semibold text-gray-800">
                Thank you for being here. Let's inspire the future together! 🚀
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="flex space-x-2">
              <span className="text-2xl">💻</span>
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">🎓</span>
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;