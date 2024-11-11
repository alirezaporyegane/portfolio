import { Button } from '@/components/ui'
import HeroAvatar from 'img/hero/hero-avatar.svg'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-14">
      <img src={HeroAvatar} alt="hero-avatar" className="mb-5" />

      <h2 className="text-3xl md:text-6xl font-bold text-white">I do code and</h2>

      <h3 className="text-3xl md:text-6xl font-bold text-white">
        make content{' '}
        <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          about it
        </span>
      </h3>

      <p className="text-base md:text-xl text-gray-400 text-center flex flex-col my-10">
        <span>I am a seasoned full-stack software engineer with over</span>
        <span>3 years of professional experience, specializing in backend development.</span>
        <span>My expertise lies in crafting robust and scalable SaaS-based</span>
        architectures on the Amazon AWS platform.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={'outline'}
          size={'lg'}
          className="col-span-2 md:col-span-1 rounded-full font-semibold text-base grid"
        >
          Get In Touch
        </Button>

        <Button
          size={'lg'}
          variant={'outline'}
          className="col-span-2 w-full md:w-auto md:col-span-1 rounded-full bg-transparent border-white text-white font-semibold text-base"
        >
          Download CV
        </Button>
      </div>
    </div>
  )
}
