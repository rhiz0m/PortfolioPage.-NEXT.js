import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface LinkItem {
  icon: IconDefinition
  url: string
}

interface Props {
  links: LinkItem[]
}

const ExternalLinks: FC<Props> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="flex-grow transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-teal-400 bg-foreground text-background gap-2 hover:bg-slate-400 hover:text-black text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
        >
          <FontAwesomeIcon icon={link.icon} width={25} height={25} />
        </a>
      ))}
    </>
  )
}

export default ExternalLinks
