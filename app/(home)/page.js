
import { Footer } from "./_Commponent/Footer";
import { Heading } from "./_Commponent/Heading";
import { Hero } from "./_Commponent/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="container h-[75vh] ">
        <Heading/>
        <Hero/>
        <Footer/>
      </div>
    </div>
  );
}
