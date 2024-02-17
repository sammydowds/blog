import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export const HireMe = () => {
  return (
    <div className="px-4 py-2 bg-oklahoma-beige-light flex-1 border-solid border-1 rounded-sm border-gray-500 flex flex-col gap-4">
      <div className="font-bold text-lg">Open To Work</div>
      <div className="text-sm">
        I am currently looking for a new role. Are you a recruiter, engineer, or
        hiring manager looking for a passionate and driven engineer? Reach out.
      </div>
      <div className="w-full max-md:flex-col flex-row gap-2 flex justify-end">
        <a
          href="https://www.linkedin.com/in/sammydowds/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center h-10 md:w-32 max-md:w-full bg-gray-100 hover:bg-gray-200 text-md text-gray-800 font-bold py-2 px-4 rounded"
        >
          View More
        </a>
        <a
          href="mailto:sammycdowds@gmail.com"
          className="text-center h-10 md:w-32 max-md:w-full bg-blue-500 hover:bg-blue-700 text-white text-md font-bold py-2 px-4 rounded"
        >
          Email Me
        </a>
      </div>
    </div>
  )
}
