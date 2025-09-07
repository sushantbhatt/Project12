import React from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => (
  <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-50" id="products">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;