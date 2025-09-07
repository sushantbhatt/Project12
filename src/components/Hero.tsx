import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 min-h-[500px] flex items-center overflow-hidden">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill=%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4 leading-tight">
              Great Launching
              <br />
              <span className="text-red-600">Offer</span>
            </h1>
            
            <div className="mb-6">
              <p className="text-amber-800 text-lg mb-2 font-medium">ENJOY FLAT</p>
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg border border-amber-200">
                <span className="text-5xl font-bold text-red-600 mr-2">25%</span>
                <span className="text-2xl font-bold text-amber-900">OFF</span>
              </div>
              <div className="mt-4 bg-amber-900 text-white inline-block px-4 py-2 rounded">
                <span className="font-medium">USE CODE</span>
                <span className="font-bold ml-2">SWAD25</span>
              </div>
            </div>
            
            <p className="text-amber-800 text-lg mb-6 font-medium">Shuddh Swad Ghar Tak!</p>
            
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Order Now
            </button>
          </div>

          {/* Right content - Product showcase */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Traditional woman illustration placeholder */}
              <div className="w-64 h-80 bg-gradient-to-b from-amber-200 to-amber-300 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/20 to-transparent" />
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">👩‍🍳</span>
                  </div>
                  <p className="text-amber-900 font-medium">Traditional<br />Taste</p>
                </div>
              </div>

              {/* Product packages */}
              <div className="absolute -right-8 top-12 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="w-24 h-32 bg-gradient-to-b from-red-500 to-red-600 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl mb-1">🥨</div>
                    <p className="text-xs font-bold">Gujiya </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 top-48 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-24 h-32 bg-gradient-to-b from-amber-600 to-amber-700 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl mb-1">🍪</div>
                    <p className="text-xs font-bold">Gujiya </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3, 4].map((dot, index) => (
          <button
            key={dot}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === 0 ? 'bg-red-500 w-6' : 'bg-amber-300 hover:bg-amber-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;