import {CursorArrowRaysIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

export const AboutMe = () => {
  const [expanded, setExpanded] = useState(false)

  if (!expanded) {
    return (
      <>
        <div className="max-md:hidden font-bold bg-oklahoma-beige h-10 w-full hover:cursor-pointer flex items-center justify-center" onClick={() => setExpanded(true)}>
          Click here to learn more about me 
          <CursorArrowRaysIcon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
        </div> 
        <div className="md:hidden font-bold bg-oklahoma-beige text-whit h-10 w-full hover:cursor-pointer flex items-center justify-center" onClick={() => setExpanded(true)}>
          Tap here to learn more about me 
          <CursorArrowRaysIcon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
        </div>
      </>
    )
  }
  return (
    <div className="flex-col md:flex-row flex border-y-2 md:justify-center border-gray-50 w-full p-2 gap-6 relative">
      {/* image */}
      <div>
        <div className="bg-gray-50 md:w-32 h-32 max-md:mt-10">

        </div>
      </div>
      {/* Info Section */}
      <div className="flex md:flex-row max-md:flex-col gap-4 md:items-center">
      <div className="flex-col text-xs">
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">TITLE</div>
          <div>Software Engineer</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">EXPERIENCE</div>
          <div>3+ Years</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">COLLEGE</div>
          <div>Oklahoma State University</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">HOBBIES</div>
          <div>Fitness, Reading</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">TEAMS</div>
          <div>Thunder, Bulls, Bears</div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex-col max-w-sm">
        <div className="text-gray-500 text-xs">INTRO</div>
        <div className="text-sm">I am an experienced full stack engineer working evenly on both sides of the stack. I have a degree in Mechanical Engineering (Dec. 2016), but switched careers in 2020. </div>
      </div>
      <div className="flex-col max-w-sm">
        <div className="text-gray-500 text-xs">SKILLS</div>
        <div className="text-sm">TypeScript, Python, React, Redux, Django, FastAPI, Express, Node, PostgreSQL, HTML, CSS, TailwindCSS, Chakra UI, Full Stack Development</div>
      </div>
      {/* Others */}
      <div onClick={() => setExpanded(false)} className="w-8 h-8 rounded-full bg-gray-100 absolute right-2 top-2 flex items-center justify-center hover:cursor-pointer">
        <XMarkIcon className="w-6 h-6" strokeWidth={1} />
      </div>
      </div>
      </div>
  )
}
