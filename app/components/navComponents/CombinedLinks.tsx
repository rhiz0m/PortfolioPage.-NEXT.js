import { FC } from "react"
import { kanit } from "../../fonts/kanit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CombinedLink } from "../shared/headerTypes"

interface LinkProps {
    links: CombinedLink[]
}

const CombinedLinks: FC<LinkProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        const linkHref = link.href || link.url
        if (!linkHref) {
          console.warn(
            `Link with title "${link.title}" is missing both href and url.`
          )
          return null
        }
        return (
          <a
            key={index}
            href={linkHref}
            aria-label={link.ariaLabel}
            className="flex-grow transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-teal-400 bg-foreground text-background gap-2 hover:bg-slate-200 hover:border-slate-500 hover:border-1 hover:text-black text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5"
          >
            <FontAwesomeIcon icon={link.icon} width={20} height={20} />
            <span className={`${kanit.className}`}>{link.title}</span>
          </a>
        )
      })}
    </>
  )
}


export default CombinedLinks
