import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface InternalLink {
  icon: IconDefinition
  ariaLabel: string
  title: string
  href?: string
}

export interface ExternalLink {
  icon: IconDefinition
  ariaLabel: string
  title: string
  url?: string
}

export interface HeaderProps {
    internalLinks?: InternalLink[]
    externalLinks?: ExternalLink[]
}