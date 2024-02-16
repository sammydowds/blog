
export const LinkedInCTA = () => {
  return(
    <div className="max-w-lg px-4 py-2 bg-gray-50 border-solid border-1 rounded-sm border-gray-500 flex flex-col gap-2">
      <div className="flex-row text-md font-bold">
        Work History
      </div>
      <div className="flex text-xs flex-row justify-evenly w-full">
        <table>
          <tbody>
          <tr>
            <td className="text-nowrap align-top italic">'16-'18</td>
            <td className="pl-2">Mechanical Engineer for Michelin Tires working on international projects.</td>
          </tr>
          <tr>
            <td className="text-nowrap align-top italic">'18-'20</td>
            <td className="pl-2">Project Manager for multi-million dollar industrial robotics projects.</td>
          </tr>
          <tr>
            <td className="text-nowrap align-top italic">'20-'23</td>
            <td className="pl-2">Shipping features, pages, and APIs as a full-stack software engineer.</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
