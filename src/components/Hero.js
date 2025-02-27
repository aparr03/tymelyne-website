import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Set Your Goals. <span className="text-indigo-600">AI Makes It Happen.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              TymeLyne uses AI to transform your goals into actionable plans, track your progress, and keep you motivated every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors shadow-md">
                Get Started for Free
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-indigo-100 rounded-2xl p-3 shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://placehold.co/600x450?text=Place-Holder" 
                  alt="TymeLyne App Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg">
              AI-Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;