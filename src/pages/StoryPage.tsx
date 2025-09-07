import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const StoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">The Shuddh Swad Story</h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            A journey of passion, purity, and the pursuit of an Indian dream.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8">Our Mission</h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100">
            <p className="text-lg text-amber-800 leading-relaxed">
              To be India's finest snacks brand, delivering <span className="font-bold text-orange-600">high-quality, hygienic, and affordable</span> traditional snacks that you can trust and enjoy, any day of the year. We are not just selling snacks; we are reviving a legacy of purity.
            </p>
          </div>
        </div>

        {/* The Beginning */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wide text-orange-500 font-semibold">THE BEGINNING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mt-2">The Spark of an Idea</h2>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100 mb-8">
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              The journey of <span className="font-bold text-amber-900">Shuddh Swad</span> began with a powerful, personal experience. Our 16-year-old founder's simple desire for a local thekua turned into a harsh lesson on food hygiene. This single incident sparked a powerful question: Why can't traditional snacks be both delicious and safe?
            </p>
            
            <p className="text-lg text-amber-700 leading-relaxed">
              This was followed by another realization during Chhath Puja—the best snacks were scarce and seasonal. This scarcity and lack of hygiene wasn't just a problem; it was an opportunity to create something better.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wide text-orange-500 font-semibold">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mt-2">Our Philosophy of Purity</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Authentic Recipes</h3>
              <p className="text-amber-700 leading-relaxed text-sm">
                We stay true to the traditions. Our recipes are passed down through generations, ensuring every bite is a genuine taste of heritage.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Uncompromising Hygiene</h3>
              <p className="text-amber-700 leading-relaxed text-sm">
                From our kitchen to your home, we maintain the strictest hygiene standards. Because good taste begins with good health.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Available for All</h3>
              <p className="text-amber-700 leading-relaxed text-sm">
                Great taste shouldn't be seasonal or exclusive. We make our traditional snacks affordable and available all year round, for everyone to enjoy.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Movement */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Join Our Movement</h2>
          <p className="text-lg text-amber-700 mb-8 max-w-3xl mx-auto">
            We are more than a brand; we are a community that believes in dreaming big. Thank you for being a part of our story. Share the joy of Shuddh Swad with your friends and family.
          </p>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Follow us on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;