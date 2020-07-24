import React from "react"
import { Link } from "gatsby"

const NavLink = ({ href, text }) => (
  <Link
    to={href}
    className="focus:outline-none bg-orange-500 text-2xl text-white m-2 py-2 px-4 rounded"
  >
    {text}
  </Link>
)

export default function Header() {
  return (
    <header>
      <nav className="flex p-4">
        <NavLink href="/" text="Home" />
        <NavLink href="/meeting" text="Schedule a call" />
        <NavLink href="/apply" text="Apply" />
      </nav>
    </header>
  )
}
