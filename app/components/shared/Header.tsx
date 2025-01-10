import InternalLinks from "../navComponents/InternalLinks"
import ExternalLinks from "../navComponents/ExternalLinks"
import { HeaderProps } from "./headerTypes"

const Header: React.FC<HeaderProps> = ({
  internalLinks = [],
  externalLinks = [],
}) => {
  return (
    <header className="bg-white mx-0 sm:mx-12">
      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-auto py-2 px-3">
        <div className="flex gap-4 justify-center">
          <InternalLinks links={internalLinks} />
        </div>
        <div className="flex gap-4 justify-center">
          <ExternalLinks links={externalLinks} />
        </div>
      </nav>
    </header>
  )
}

export default Header
