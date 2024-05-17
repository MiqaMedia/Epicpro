// src/Product.jsx
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another great product.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This product is also great.',
    image: 'https://via.placeholder.com/300',
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="h-64 w-full object-cover mb-4 rounded-t-lg" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
