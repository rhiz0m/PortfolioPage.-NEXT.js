import InternalLinks from "@/app/components/navComponents/InternalLinks"
import { HeaderProps } from "@/app/components/shared/headerTypes"

const HeaderProjects: React.FC<HeaderProps> = ({
  internalLinks = []
}) => {
  return (
    <header className="bg-white mx-0">
      <nav className="grid grid-cols-1 gap-4 md:mx-0 lg:mx-32 sm:grid-cols-2 justify-center mx-auto py-2 px-3">
        <div className="flex gap-4 justify-center">
          <InternalLinks links={internalLinks} />
        </div>
      </nav>
    </header>
  )
}

export default HeaderProjects
