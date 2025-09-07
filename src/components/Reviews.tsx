import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Customer Review 1"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Customer Review 2"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Customer Review 3"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Customer Review 4"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "Customer Review 5"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Reviews</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reviews.map((review, index) => (
            <div key={review.id} className="group relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Customer enjoying product overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">😋</div>
                    <p className="text-sm font-medium">Happy Customer</p>
                  </div>
                </div>
              </div>
              
              {/* Video play indicator for some reviews */}
              {(index === 1 || index === 3) && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Reviews summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-xl">⭐</span>
              ))}
            </div>
            <span className="text-amber-900 font-semibold ml-2">4.9/5 from 1000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;