
import { Heading } from "./_Commponent/Heading";
import { Hero } from "./_Commponent/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="container  flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'">
        <Heading/>
        <Hero/>
      </div>
    </div>
  );
}
