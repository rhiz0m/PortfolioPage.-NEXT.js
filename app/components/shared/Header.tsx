import CombinedLinks from "../navComponents/CombinedLinks"
import { HeaderProps } from "./headerTypes"

const Header: React.FC<HeaderProps> = ({ combinedLinks = [] }) => {
  const half = Math.ceil(combinedLinks.length / 2)
  const linkGroups = [combinedLinks.slice(0, half), combinedLinks.slice(half)]

  return (
    <header className="bg-white mx-0">
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:mx-0 lg:mx-32 justify-center mx-auto py-2 px-3">
        {linkGroups.map((group, index) => (
          <div key={index} className="flex gap-4 justify-center">
            <CombinedLinks links={group} />
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header
