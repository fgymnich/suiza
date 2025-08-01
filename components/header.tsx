"use client" // Include only if you're using useState, useEffect, or client-only code

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search } from "lucide-react"
import MobileMenu from "./mobile-menu"

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 soft-shadow">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/logo-villard-louis.png"
                alt="Villard & Louis"
                width={240}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-black hover:text-blue-600 font-bold font-myriad-pro text-xl transition-colors duration-200"
            >
              Inicio
            </Link>

            <div className="relative group">
              {/* Trigger Button */}
              <Link className="flex items-center text-black font-bold font-myriad-pro text-xl transition-colors duration-200" href="/suiza">
                Marcas
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Expand the hoverable area */}
              <div className="absolute left-0 mt-2 w-40 pt-2 z-50">
                <div
                  className="bg-white border border-blue-100 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200"
                  onMouseEnter={(e) => e.currentTarget.classList.add("opacity-100", "visible")}
                  onMouseLeave={(e) => e.currentTarget.classList.remove("opacity-100", "visible")}
                >
                  {["Suiza", "Clinsy", "Hornolim", "Limpialin", "Suavitel", "Duft", "Acquapul"].map((brand) => (
                    <Link
                      key={brand}
                      href={`/${brand.toLowerCase()}`}
                      className="block px-4 py-2 text-black text-lg hover:bg-blue-100 font-myriad-pro"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/consejos"
              className="text-black hover:text-blue-600 font-bold font-myriad-pro text-xl transition-colors duration-200"
            >
              Compañía
            </Link>
            <Link
              href="/contacto"
              className="text-black hover:text-blue-600 font-bold font-myriad-pro text-xl transition-colors duration-200"
            >
              Contacto
            </Link>
            <button className="p-3 hover:bg-blue-50 rounded-xl transition-colors duration-200">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
