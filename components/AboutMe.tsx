import {CursorArrowRaysIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { urlForImage } from 'lib/sanity.image'
import { About } from 'lib/sanity.queries'
import Image from 'next/image'
import { useState } from "react"

export const AboutMe = (about: About) => {
  const [expanded, setExpanded] = useState(true)
  const { title, hobbies, skills, intro, status, yearsOfExperience, teams, profilePicture} = about

  if (!expanded) {
    return (
      <>
        <div className="max-md:hidden font-bold bg-oklahoma-beige h-10 w-full hover:cursor-pointer flex items-center justify-center text-sm" onClick={() => setExpanded(true)}>
          Click here to learn more about me 
          <CursorArrowRaysIcon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" stroke="black" aria-hidden="true" />
        </div> 
        <div className="md:hidden font-bold bg-oklahoma-beige text-whit h-10 w-full hover:cursor-pointer flex items-center justify-center text-sm" onClick={() => setExpanded(true)}>
          Tap here to learn more about me 
          <CursorArrowRaysIcon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" stroke="black" aria-hidden="true" />
        </div>
      </>
    )
  }
  return (
    <div className="flex-col md:flex-row flex border-y-2 md:justify-center border-gray-50 w-full p-2 gap-6 relative">
      {/* image */}
      <div>
        <div className="bg-gray-50 md:w-32 h-32 max-md:mt-10">
          <Image
            src={
              profilePicture?.asset?._ref
                ? urlForImage(profilePicture).height(400).width(400).fit('crop').url()
                : 'https://source.unsplash.com/96x96/?face'
            }
            height={100}
            width={100}
            alt={profilePicture?.alt ?? title}
          />
        </div>
      </div>
      {/* Info Section */}
      <div className="flex md:flex-row max-md:flex-col gap-6 md:items-center">
      <div className="flex-col text-xs">
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">TITLE</div>
          <div>{title}</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">EXPERIENCE</div>
          <div>{yearsOfExperience}</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">COLLEGE</div>
          <div>Oklahoma State</div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">HOBBIES</div>
          <div>
            {
              hobbies?.map((h, i) => {
                return `${h}${i !== hobbies.length - 1 ? ', ' : ''}`
              })
            }
          </div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">TEAMS</div>
          <div>
            {
              teams?.map((t, i) => {
                return `${t}${i !== teams.length - 1 ? ', ' : ''}`
              })
            }
          </div>
        </div>
        <div className="flex gap-1 space-between gap-4 w-full">
          <div className="text-gray-500">STATUS</div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-chi-red"></div>
            {status}
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex-col max-w-sm">
        <div className="text-gray-500 text-xs flex items-center gap-1">
          INTRO
        </div>
        <div className="text-sm">{intro}</div>
      </div>
      <div className="flex-col max-w-sm">
        <div className="text-gray-500 text-xs flex items-center gap-1">
          SKILLS
        </div>
        <div className="text-sm">
          {
            skills?.map((s, i) => {
              return `${s}${i !== skills.length - 1 ? ', ' : ''}`
            })
          }
        </div>
      </div>
      {/* Others */}
      <div onClick={() => setExpanded(false)} className="w-8 h-8 rounded-full bg-gray-100 absolute right-2 top-2 flex items-center justify-center hover:cursor-pointer">
        <XMarkIcon className="w-6 h-6" strokeWidth={1} />
      </div>
      </div>
      </div>
  )
}
