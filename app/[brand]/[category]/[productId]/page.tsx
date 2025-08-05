"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getBrandData } from "@/lib/getBrandData"
import { getBrandCategories } from "@/lib/getBrandCategories"
import { getCategoryProducts } from "@/lib/getCategoryProducts"
import { useParams} from "next/navigation"

// Mock product data - in a real app, this would come from a database or API
const getProductData = (brand: string, category: string, productId: string) => {
  const products = {
    suiza: {
      ceras: {
        "cera-suiza-roble-oscuro": {
          id: "cera-suiza-roble-oscuro",
          name: "Cera Suiza Roble Oscuro",
          brand: "Suiza",
          category: "Ceras",
          articleNo: "10.012",
          longDescription:
            "Cera para madera Suiza Roble Oscuro con fórmula original que protege, nutre y embellece todo tipo de maderas. Proporciona un acabado duradero con el característico tono roble oscuro.",
          availableSizes: [
            {
              weight: "850ml",
              image: "/images/cera-suiza-roble-850ml.jpeg",
              articleNo: "10.012",
            },
            {
              weight: "5.000ml",
              image: "/images/cera-suiza-roble-5000ml.jpeg",
              articleNo: "10.013",
            },
          ],
          sections: {
            description: {
              title: "CARACTERÍSTICAS",
              content:
                "Cera especialmente formulada para el cuidado y protección de maderas. Su fórmula original penetra profundamente en la madera, nutriéndola y protegiéndola contra el desgaste diario. Proporciona un hermoso acabado en tono roble oscuro que realza la belleza natural de la madera.",
            },
            usage: {
              title: "SUPERFICIES",
              content:
                "Ideal para todo tipo de maderas: muebles, pisos, puertas, marcos, escaleras y superficies de madera en general. Especialmente recomendada para maderas que requieren un acabado en tono roble oscuro.",
            },
            instructions: {
              title: "MODO DE EMPLEO",
              content:
                "Limpiar la superficie antes de aplicar. Aplicar con un paño suave en movimientos circulares. Dejar secar y lustrar con un paño limpio y seco. Para mejores resultados, aplicar en capas finas y uniformes.",
            },
            availableSizes: {
              title: "FORMATOS",
            },
          },
        },
      },
    },
  }

  return (
    products[brand]?.[category]?.[productId] || {
      id: productId,
      name: "Producto no encontrado",
      brand: brand,
      category: category,
      articleNo: "N/A",
      longDescription: "Producto no encontrado en nuestra base de datos.",
      availableSizes: [
        {
          weight: "N/A",
          image: "/placeholder.svg",
          articleNo: "N/A",
        },
      ],
      sections: {
        description: {
          title: "CARACTERÍSTICAS",
          content: "Información no disponible.",
        },
        usage: {
          title: "SUPERFICIES",
          content: "Información no disponible.",
        },
        instructions: {
          title: "MODO DE EMPLEO",
          content: "Información no disponible.",
        },
        availableSizes: {
          title: "FORMATOS",
        },
      },
    }
  )
}

interface ProductPageProps {
  params: {
    brand: string
    category: string
    productId: string
  }
}

export default function ProductPage() {
  const params = useParams()
  const brandData = getBrandData(params.brand as string)

  // Find category matching the slug param (slugify your titles the same way you do in URLs)
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "") // Remove all non-word characters except dashes

  const brandSlug = slugify(params.brand as string)
  const categorySlug = slugify(decodeURIComponent(params.category as string))
  const productSlug = slugify(decodeURIComponent(params.productId as string))
  
  const categoryProduct = getCategoryProducts(brandSlug, categorySlug).find(
    (product) => slugify(product.name) === productSlug
  )
  
  if (!categoryProduct) {
    console.error("Product not found!", {
      brandSlug,
      categorySlug,
      productSlug,
      available: getCategoryProducts(brandSlug, categorySlug).map(p => slugify(p.name)),
    })
  }
  const product = getProductData(params.brand as string, params.category as string, params.productId as string)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    description: false, // Start with description section not expanded
  })
  const [selectedSize, setSelectedSize] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  // Get category data for breadcrumb
  const categories = getBrandCategories(params.brand as string)

  const categoryData = categories.find(
    (cat) => slugify(cat.title) === slugify(decodeURIComponent(params.category as string)),
  ) || {
    title: "Categoría",
    description: "",
    image: "/placeholder.svg",
  }

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageModalOpen(false)
      }
    }

    if (isImageModalOpen) {
      document.addEventListener("keydown", handleEscKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "unset"
    }
  }, [isImageModalOpen])

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
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
          <Link
            href={`/${params.brand}/${params.category}`}
            className={`hover:text-${brandData.colors.accent} transition-colors`}
          >
            {categoryData.title}
          </Link>
          <span>/</span>
          <span className={`text-${brandData.colors.accent} font-semibold`}>{categoryProduct?.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Product Image - Left Side */}
            <div className="lg:col-span-6">
              <AnimatedText>
                <div className="sticky top-32">
                  <div
                    className="relative overflow-hidden rounded-2xl soft-shadow bg-white p-8 cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <Image
                      src={categoryProduct?.image[selectedSize] || "/placeholder.svg"}
                      alt={categoryProduct?.name || "undefined"}
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain scale-[1.3] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 rounded-2xl"></div>
                  </div>
                </div>
              </AnimatedText>
            </div>

            <div className="lg:col-span-1" />

            {/* Product Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Product Header */}
              <AnimatedText>
                <div className="hidden lg:block">
                  <div
                    className={`text-center bg-gradient-to-r from-${brandData.colors.accent} to-${brandData.colors.accent} text-white p-6 rounded-lg`}
                  >
                    <h1 className="text-2xl lg:text-3xl font-bold font-myriad-pro mb-2">
                      {categoryProduct?.name}
                      {categoryProduct?.sizes[selectedSize] && (
                        <> ({categoryProduct?.sizes[selectedSize]})</>
                      )}
                    </h1>
                    <p className={`text-${brandData.colors.text} font-myriad-pro text-2xl`}>
                      {"Art. "}
                      {product.availableSizes?.[selectedSize]?.articleNo && (
                        <> {product.availableSizes[selectedSize].articleNo}</>
                      )}
                    </p>
                  </div>
                </div>
              </AnimatedText>

              {/* Expandable Sections */}
              <div className="space-y-4">
                {Object.entries(product.sections).map(([key, section]: [string, any]) => (
                  <AnimatedText key={key} delay={100}>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(key)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 bg-${brandData.colors.accent} rounded-full flex items-center justify-center`}
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <span className={`font-bold text-${brandData.colors.accent} font-myriad-pro text-lg`}>
                            {section.title}
                          </span>
                        </div>
                        {expandedSections[key] ? (
                          <ChevronUp className={`h-5 w-5 text-${brandData.colors.accent}`} />
                        ) : (
                          <ChevronDown className={`h-5 w-5 text-${brandData.colors.accent}`} />
                        )}
                      </button>

                      {expandedSections[key] && (
                        <div className="p-6 bg-white border-t border-gray-200">
                          {/* Special render for availableSizes */}
                          {key === "availableSizes" ? (
                            <div className="space-y-4">
                              <div className="flex gap-4 flex-wrap">
                                {categoryProduct?.sizes.map((size: any, index: number) => (
                                  <button
                                    key={index}
                                    onClick={() => setSelectedSize(index)}
                                    className={`px-4 py-2 rounded-full font-myriad-pro font-bold border-2 transition-colors ${
                                      selectedSize === index
                                        ? `bg-${brandData.colors.accent} text-white border-${brandData.colors.accent}`
                                        : `bg-white text-${brandData.colors.accent} border-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/10`
                                    }`}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="text-gray-700 font-myriad-pro leading-relaxed mb-4">{section.content}</p>
                              {section.buttonText && (
                                <Button
                                  className={`bg-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/90 text-white font-myriad-pro rounded-full px-8 py-2`}
                                >
                                  {section.buttonText}
                                </Button>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <h2 className="text-3xl font-bold font-myriad-pro text-gray-900 text-center mb-12">
              Productos Relacionados
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-2">
            {[
              { name: "Suiza Lavandina Gel", image: "/images/product-lavandinas-gel.jpeg", price: "$1.890" },
              { name: "Suiza Detergente", image: "/images/product-detergentes.jpeg", price: "$2.150" },
              { name: "Suiza Lustramuebles", image: "/images/product-lustramuebles.jpeg", price: "$1.750" },
              { name: "Suiza Autobrillo", image: "/images/product-autobrillos.jpeg", price: "$2.300" },
            ].map((relatedProduct, index) => (
              <AnimatedText key={index} delay={index * 100}>
                <Card className="family-card border-0 bg-white overflow-hidden group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold font-myriad-pro text-gray-800 mb-2">{relatedProduct.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div
            className="relative max-w-7xl max-h-[95vh] bg-white rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className={`absolute top-4 right-4 w-10 h-10 bg-${brandData.colors.accent} hover:bg-${brandData.colors.accent}/90 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10`}
            >
              ×
            </button>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold font-myriad-pro text-gray-800">
                {categoryProduct?.name} ({categoryProduct?.sizes[selectedSize]})
              </h3>
            </div>
            <div className="max-h-[80vh] overflow-hidden flex items-center justify-center">
              <Image
                src={categoryProduct?.image[selectedSize] || "/placeholder.svg"}
                alt={categoryProduct?.name || "undefined"}
                width={800}
                height={1000}
                className="w-full max-h-[80vh] scale-[1.2] object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
