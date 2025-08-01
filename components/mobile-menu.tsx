"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isBrandsExpanded, setIsBrandsExpanded] = useState(false)

  const menuItems = [
    { href: "/", label: "Inicio" },
    {
      label: "Marcas",
      isExpandable: true,
      subItems: [
        { href: "/suiza", label: "Suiza" },
        { href: "/clinsy", label: "Clinsy" },
        { href: "/hornolim", label: "Hornolim" },
        { href: "/limpialin", label: "Limpialin" },
        { href: "/suavitel", label: "Suavitel" },
        { href: "/duft", label: "Duft" },
        { href: "/acquapul", label: "Acquapul" },
      ],
    },
    { href: "/consejos", label: "Compañía" },
    { href: "/contacto", label: "Contacto" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
    setIsBrandsExpanded(false)
  }

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />

          {/* Menu */}
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
            <nav className="flex flex-col py-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.isExpandable ? (
                    <>
                      <button
                        onClick={() => setIsBrandsExpanded(!isBrandsExpanded)}
                        className="w-full px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-bold font-myriad-pro text-lg transition-colors duration-200 border-b border-gray-50 flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isBrandsExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isBrandsExpanded && (
                        <div className="bg-gray-50 border-b border-gray-50">
                          {item.subItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="block px-12 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-bold font-myriad-pro text-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={handleLinkClick}
                      className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-bold font-myriad-pro text-lg transition-colors duration-200 border-b border-gray-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Search button for mobile */}
              <div className="px-6 py-4 border-t border-gray-100 mt-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Buscar productos
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
