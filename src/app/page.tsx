import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <h1>
        <Hero />
        <NewProduct />
        <Testimonial />
      </h1>
    </div>
  );
}
