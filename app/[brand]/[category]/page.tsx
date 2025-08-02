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
import { getCategoryProducts } from "@/lib/getCategoryProducts"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useParams } from "next/navigation"

interface CategoryPageProps {
  params: {
    brand: string
    category: string
  }
}

export default function CategoryPage() {
  const params = useParams()
  const brandData = getBrandData(params.brand as string)

  // Get all categories for this brand
  const categories = getBrandCategories(params.brand as string)

  // Find category matching the slug param (slugify your titles the same way you do in URLs)
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "") // Remove all non-word characters except dashes

  const categoryData = categories.find(
    (cat) => slugify(cat.title) === slugify(decodeURIComponent(params.category as string)),
  ) || {
    title: "Categoría no encontrada",
    description: "",
    image: "/placeholder.svg",
  }

  const products = getCategoryProducts(slugify(params.brand as string), slugify(decodeURIComponent(params.category as string)))

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
          <Link href={`/${params.brand}`} className={`hover:text-${brandData.colors.accent} transition-colors`}>
            {brandData.name}
          </Link>
          <span>/</span>
          <span className={`text-${brandData.colors.accent} font-semibold`}>{categoryData.title}</span>
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

      {/* Category Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <div className="text-center mb-4">
              <h1 className="text-3xl lg:text-5xl font-bold font-myriad-pro text-gray-900 mb-4">
                {categoryData.title}
              </h1>
              <p className="text-xl text-gray-700 font-myriad-pro max-w-3xl mx-auto">{categoryData.description}</p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-0 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
            {products.map((product, index) => (
              <AnimatedText key={product.name} delay={index * 100}>
                <Card className="family-card border-0 bg-white overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <Link href={product.href} className="block">
                      <div className="relative overflow-hidden bg-gray-100 flex-1">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>

                    <div className={`bg-${brandData.colors.accent} text-white p-4 text-center`}>
                      <h3
                        className={`font-bold font-myriad-pro mb-2 ${product.name.length > 43 ? "text-xs" : product.name.length > 25 ? "text-sm" : product.name.length > 20 ? "text-base" : "text-lg"}`}
                      >
                        {product.name}
                      </h3>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 font-myriad-pro text-sm px-1 mb-1">{product.description}</p>

                      {product.sizes.length > 0 && (
                          <button
                            onClick={() => toggleCard(index)}
                            className={`w-fit flex mb-0  justify-left gap-2 py-2 px-1 text-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/10 font-myriad-pro text-sm rounded transition-colors`}
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
                        )}

                      {/* Expandable Details Section */}
                      {expandedCards[index] && product.sizes.length > 0 && (
                        <div className="space-y-3 mb-4">
                          <div>
                            <h4 className="font-bold text-gray-800 font-myriad-pro text-sm mb-2">
                              Tamaños disponibles:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {product.sizes.map((size, sizeIndex) => (
                                <span
                                  key={sizeIndex}
                                  className={`px-2 py-1 bg-${brandData.colors.accent}/10 text-${brandData.colors.accent} rounded-full text-xs font-myriad-pro font-semibold`}
                                >
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 space-y-4">
                        <Link href={product.href}>
                          <Button
                            className={`w-full bg-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/90 text-white font-myriad-pro`}
                          >
                            Ver Producto
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

      {/* Back to Brand */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText>
            <Link href={`/${params.brand}`}>
              <Button
                variant="outline"
                className={`border-${brandData.colors.accent} text-${brandData.colors.accent} hover:bg-${brandData.colors.accent} hover:text-white font-myriad-pro px-8 py-3 text-lg bg-transparent`}
              >
                ← Volver a {brandData.name}
              </Button>
            </Link>
          </AnimatedText>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
