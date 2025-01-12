import { FC } from "react"
import { kanit } from "../../fonts/kanit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { InternalLink } from "../shared/headerTypes"


interface InternalLinkProps {
  links: InternalLink[]
}

const InternalLinks: FC<InternalLinkProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.ariaLabel}
          className="flex-grow transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-teal-400 bg-foreground text-background gap-2 hover:bg-slate-200 hover:border-slate-500 hover:border-1 hover:text-black text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
        >
          <span className={`${kanit.className}`}>{link.title}</span>
          <FontAwesomeIcon icon={link.icon} width={20} height={20} />
        </a>
      ))}
    </>
  )
}

export default InternalLinks
