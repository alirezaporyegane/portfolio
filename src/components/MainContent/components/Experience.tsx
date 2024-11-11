import css from 'img/experience/css.svg'
import docker from 'img/experience/docker.svg'
import bootstrap from 'img/experience/bootstrap.svg'
import html from 'img/experience/html.svg'
import javascript from 'img/experience/javascript.svg'
import nextjs from 'img/experience/nextjs.svg'
import node from 'img/experience/node.svg'
import nuxt from 'img/experience/nuxt.svg'
import react from 'img/experience/react.svg'
import tailwind from 'img/experience/tailwind.svg'
import typescript from 'img/experience/typescript.svg'
import vue from 'img/experience/vue.svg'

export default function Experience() {
  return (
    <div className="py-14 flex justify-center flex-col items-center">
      <h3 className="mb-8 text-white text-2xl font-bold">EXPERIENCE WITH</h3>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <img
          src={html}
          alt="html logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={css}
          alt="css logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={javascript}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={typescript}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={vue}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={react}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={node}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={nextjs}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={nuxt}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />

        <img
          src={docker}
          alt="docker logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        <img
          src={bootstrap}
          alt="bootstrap logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
        
        <img
          src={tailwind}
          alt="javascript logo"
          width={60}
          height={60}
          className="col-span-4 sm:col-span-3 md:col-span-2"
        />
      </div>
    </div>
  )
}
