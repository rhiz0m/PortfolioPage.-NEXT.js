import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface CombinedLink {
  icon: IconDefinition
  ariaLabel: string
  title: string
  href?: string
  url?: string
}

export interface HeaderProps {
    combinedLinks?: CombinedLink[]
}
