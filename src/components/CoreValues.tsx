import React from 'react';
import { Leaf, TrendingUp, Heart, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We source ingredients responsibly and use eco-friendly packaging to minimize our environmental footprint."
    },
    {
      icon: TrendingUp,
      title: "Quality",
      description: "We never compromise on quality, using only premium ingredients to create exceptional snacks."
    },
    {
      icon: Heart,
      title: "Health",
      description: "We believe healthy snacking without sacrificing taste is achievable, creating nutritious options with traditional ingredients."
    },
    {
      icon: Users,
      title: "Community",
      description: "We support local farmers and help rural communities through various partnership initiatives."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Core Values</h2>
          <p className="text-amber-700 text-lg max-w-3xl mx-auto">
            These principles guide everything we do, from sourcing ingredients to serving our customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon container with animated background */}
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                      {value.title}
                    </h3>
                    
                    <p className="text-amber-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;