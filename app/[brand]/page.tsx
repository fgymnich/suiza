"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/animated-text"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getBrandData } from "@/lib/getBrandData"
import { getBrandCategories } from "@/lib/getBrandCategories"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface BrandPageProps {
  params: {
    brand: string
  }
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandData = getBrandData(params.brand)

  const brandCategories = getBrandCategories(params.brand)

  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({})

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-2 text-lg font-myriad-pro text-gray-600">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className={`text-${brandData.colors.accent} font-semibold`}>{brandData.name}</span>
        </div>
      </div>

      {/* Brand Banner - Compact Design with White Center Fade */}
      <section className="relative overflow-hidden">
        <div className={`bg-gradient-to-r ${brandData.colors.primary} py-2 relative`}>
          {/* White center fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedText>
              <div className="flex items-center justify-center">
                <Image
                  src={brandData.logo || "/placeholder.svg"}
                  alt={brandData.name}
                  width={200}
                  height={100}
                  className="object-contain max-h-32 w-auto drop-shadow-lg"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold font-myriad-pro text-gray-900 mb-4">Categorías</h2>
            </div>
          </AnimatedText>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {brandCategories.map((category, index) => (
              <AnimatedText key={category.title} delay={index * 100}>
                <Card className="family-card border-0 bg-white overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <Link
                      href={`/${params.brand}/${category.title.toLowerCase().replace(/\s+/g, "-").replace("ó", "o").replace("í", "i")}`}
                      className="block"
                    >
                      <div className="relative overflow-hidden bg-gray-100 flex-1">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>

                    <div className={`bg-${brandData.colors.accent} text-white p-4 text-center`}>
                      <h3
                        className={`font-bold font-myriad-pro mb-2 ${category.title.length > 20 ? "text-base" : "text-lg"}`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 font-myriad-pro text-sm px-1 mb-1">{category.description}</p>

                      <button
                          onClick={() => toggleCard(index)}
                          className={`w-fit flex justify-left gap-2 py-2 px-1 text-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/10 font-myriad-pro text-sm rounded transition-colors`}
                        >
                          {expandedCards[index] ? (
                            <>
                              Cerrar
                              <ChevronUp className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Abrir Detalles
                              <ChevronDown className="h-4 w-4" />
                            </>
                          )}
                        </button>

                      {/* Expandable Details Section */}
                      {expandedCards[index] && (
                        <div className="space-y-2 mb-4">
                          <h4 className="font-bold text-gray-800 font-myriad-pro text-sm">Productos disponibles:</h4>
                          <ul className="text-xs text-gray-600 font-myriad-pro space-y-1">
                            {category.products.map((product, productIndex) => (
                              <li key={productIndex} className="flex items-center">
                                <div className={`w-1.5 h-1.5 bg-${brandData.colors.accent} rounded-full mr-2`}></div>
                                {product}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-4 space-y-4">
                        <Link
                          href={`/${params.brand}/${category.title.toLowerCase().replace(/\s+/g, "-").replace("ó", "o").replace("í", "i")}`}
                        >
                          <Button
                            className={`w-full bg-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/90 text-white font-myriad-pro`}
                          >
                            Ver Productos
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/*<section className={`py-16 bg-gradient-to-r ${brandData.colors.primary}`}>
        <div className="container mx-auto px-6 text-center">
          <AnimatedText>
            <h2 className="text-3xl lg:text-5xl font-bold font-myriad-pro text-white mb-6">
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className={`text-xl text-${brandData.colors.text} font-myriad-pro mb-8 max-w-2xl mx-auto`}>
              Nuestro equipo de expertos está aquí para ayudarte a encontrar el producto perfecto para tus necesidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`bg-white text-${brandData.colors.accent} hover:bg-gray-100 font-myriad-pro px-8 py-3 text-lg`}
              >
                Contactar Asesor
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 font-myriad-pro px-8 py-3 text-lg bg-transparent"
              >
                Ver Catálogo Completo
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
