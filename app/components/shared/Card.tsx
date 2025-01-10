import React from "react"
import Image from "next/image"
import { kanit } from "../../fonts/kanit"

type cardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  heading: string
  content: React.ReactNode
  className?: string
}

const Card: React.FC<cardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  heading,
  content,
}) => {
  return (
    <div className="text-slate-600 bg-gradient-to-r from-slate-200 to-white rounded-xl my-14 mx-4">
      <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center mb-3">
        <div className="justify-center max-w-[200px] mx-auto">
          <Image
            className="rounded-full object-cover mt-2 p-1"
            aria-hidden
            src={imageSrc}
            alt={imageAlt}
            layout="responsive"
            width={1}
            height={1}
          />
          <div className="text-center text-sm space-y-1 pb-2">
            <p>_____</p>
            <p className="font-semibold">{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="sm:col-span-2 bg-white px-12 py-6 space-y-3 text-sm text-slate-600 text-justify rounded-xl">
          <h1
            className={`text-center font-extrabold text-black text-4xl ${kanit.className}`}
          >
            {heading}
          </h1>
          <div className="space-y-3">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
