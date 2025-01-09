import { FC } from "react"
import { kanit } from "../../fonts/kanit"

interface LinkItem {
  title: string
  href: string
}

interface Props {
  links: LinkItem[]
}

const InternalLinks: FC<Props> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex-grow transition duration-500 ease-in-out hover:scale-105 rounded-md border border-solid border-transparent flex items-center justify-center text-teal-100 bg-foreground text-background gap-2 hover:bg-teal-200 hover:text-black text-sm sm:text-base h-10 sm:h-9 px-4 sm:px-5 "
        >
          <span className={`${kanit.className}`}>{link.title}</span>
        </a>
      ))}
    </>
  )
}

export default InternalLinks
