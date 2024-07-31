"use cleint";

import React from 'react'
import ProductCard from '@/components/ProductCard'

const NewProduct = () => {
      const ProductsData = [
        {
          img: "/jacket-1.webp",
          title: "Jacket",
          desc: "MEN Yarn Fleece Full-Zip Jacket",
          rating: 4,
          price: "45.00",
        },
        {
          img: "/skirt-1.webp",
          title: "skirt",
          desc: "Black Floral Wrap Midi Skirt",
          rating: 5,
          price: "55.00",
        },
        {
          img: "/party-wear-1.webp",
          title: "party-wear",
          desc: "Women's Party Wear Shoes",
          rating: 3,
          price: "25.00",
        },
        {
          img: "/shirt-1.webp",
          title: "shirt",
          desc: "Pure Garment Dyed Cotton Shirt",
          rating: 4,
          price: "45.00",
        },
        {
          img: "/sports-1.webp",
          title: "sports",
          desc: "Trekking & Running Shoes - Black",
          rating: 3,
          price: "58.00",
        },
        {
          img: "/watch-1.webp",
          title: "WATCHES",
          desc: "Smart Watches Vital Plus",
          rating: 4,
          price: "100.00",
        },
        {
          img: "/watch-2.webp",
          title: "WATCHES",
          desc: "Pocket Watch Leather Pouch",
          rating: 4,
          price: "120.00",
        },
      ];
  return (
    <div>
      <div className="container pt-16">
        <h2 className="text-3xl text-center font-bold mb-5 border border-gray-300 w-fit mx-auto px-3 py-2 bg-primary text-white rounded-lg transition-all hover:bg-gray-500 cursor-pointer">
          New Products
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-20">
          {ProductsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProduct