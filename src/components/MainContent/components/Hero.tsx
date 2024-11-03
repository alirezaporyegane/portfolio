import { Button } from "@/components/ui/button";
import HeroAvatar from "../../../../public/img/hero/hero-avatar.svg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center my-14">
      <img src={HeroAvatar} alt="hero-avatar" className="mb-5" />

      <h2 className="text-6xl font-bold text-white">I do code and</h2>

      <h3 className="text-6xl font-bold text-white">
        make content{" "}
        <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          about it
        </span>
      </h3>

      <p className="text-xl text-gray-400 text-justify flex flex-col my-10">
        <span>
          I am a seasoned full-stack software engineer with over 3 years of
        </span>
        <span>
          professional experience, specializing in backend development. My
        </span>
        <span>
          expertise lies in crafting robust and scalable SaaS-based
          architectures
        </span>
        on the Amazon AWS platform.
      </p>

      <div className="flex items-center">
        <Button variant={"outline"} size={"lg"} className="me-4 rounded-full">
          Get In Touch
        </Button>

        <Button
          size={"lg"}
          variant={"outline"}
          className="ms-4 rounded-full bg-transparent border-white text-white"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
