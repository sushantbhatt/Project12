import React from "react";

type Product = {
  id: number;
  name: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  onSale: boolean;
  isCombo: boolean;
  packCount?: number;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group">
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.onSale && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Sale
          </div>
        )}
        {product.isCombo && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            PACK OF {product.packCount}
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-orange-600">{product.salePrice}</span>
          {product.originalPrice !== product.salePrice && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;