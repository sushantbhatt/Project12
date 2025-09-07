import React from 'react';
import { Leaf, TrendingUp, Heart, Users } from 'lucide-react';

const CoreValuesPage = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We source ingredients responsibly and use eco-friendly packaging to minimize our environmental footprint.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Quality",
      description: "We never compromise on quality, using only premium ingredients to create exceptional snacks.",
      color: "from-orange-400 to-amber-500"
    },
    {
      icon: Heart,
      title: "Health",
      description: "We believe healthy snacking without sacrificing taste is achievable, creating nutritious options with traditional ingredients.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "We support local farmers and help rural communities through various partnership initiatives.",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Core Values</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            These principles guide everything we do, from sourcing ingredients to serving our customers.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-orange-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon container */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                      {value.title}
                    </h3>
                    
                    <p className="text-amber-700 leading-relaxed text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesPage;