import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import Link from "next/link"

interface LinkItem {
  icon: IconDefinition
  url: string
}

interface ExternalLinksProps {
  links: LinkItem[]
}

const ExternalLinks: FC<ExternalLinksProps> = ({ links }) => {
  return (
    <div>
      {links.map(({ icon, url }, index) => (
        <Link key={index} href={url}>
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  )
}

export default ExternalLinks
