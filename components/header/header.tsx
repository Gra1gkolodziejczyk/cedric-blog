import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <Link href="/" className="font-bold">Cédric Vidalie</Link>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <Link className="text-black hover:text-blue-600 hover:font-bold" href="/">Accueil</Link>
          <Link className="text-black hover:text-blue-600 hover:font-bold" href="/blog">Blog</Link>
          <Link className="text-black hover:text-blue-600 hover:font-bold" href="/cv">CV</Link>
          <Link className="text-black hover:text-blue-600 hover:font-bold" href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )  
}