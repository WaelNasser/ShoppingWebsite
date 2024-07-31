import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className="container py-16 grid-cols-2">
        <h2 className="text-3xl text-center font-bold mb-5 border border-gray-300 w-fit mx-auto px-3 py-2 bg-primary text-white rounded-lg transition-all hover:bg-gray-500 cursor-pointer">Testimonial</h2>
      <div className="grid gap-4 lg:grid-cols-[300px,1fr]">
        <div className="border border-gray-300 rounded-2xl grid place-items-center p-6">
          <div className="flex items-center gap-1 flex-col text-center">
            <Image
              src="/user.webp"
              alt="user"
              width={80}
              height={80}
              className="rounded-full inline-block"
            />
            <h1 className="text-[24px] text-gray-500 font-bold">Elsa Doe</h1>
            <p className="text-[16px]">CEO & Founder Invision</p>
            <Image
              src="/quotes.svg"
              alt="quotes"
              width={30}
              height={30}
              className="inline-block py-2"
            />
            <p className="max-w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              cupiditate. Optio, autem. Enim deleniti consequatur magni
              consequuntur et tempora, qui iusto tenetur non nobis repudiandae
              quos iure facilis recusandae asperiores.
            </p>
          </div>
        </div>
        <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-[272727]">
              Summer Collection
            </h2>
            <p className="text-gray-500 text-[20px]">
              Starting @ $20 <b>Shop Now</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial