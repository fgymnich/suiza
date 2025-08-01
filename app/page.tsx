"use client" // This component needs to be a client component to use useState for the product section

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Search } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"
import { SocialMediaSection } from "@/components/social-media-section"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedText } from "@/components/animated-text"
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomePage() {
  const [showMoreProducts, setShowMoreProducts] = useState(false)

  const initialProducts = [
    {
      title: "Ceras para Madera",
      image: "/images/product-ceras-madera.jpeg",
      description: "Productos especializados para mantener tu baño impecable y desinfectado.",
    },
    {
      title: "Lustramuebles",
      image: "/images/product-lustramuebles.jpeg",
      description: "Soluciones versátiles para limpiar toda tu casa con un solo producto.",
    },
    {
      title: "Autobrillo",
      image: "/images/product-autobrillos.jpeg",
      description: "Cuidado especializado para todos los tipos de pisos de tu hogar.",
    },
    {
      title: "Limpiadores",
      image: "/images/product-limpiadores.jpeg",
      description: "Protección familiar completa eliminando 99.9% de gérmenes y bacterias.",
    },
    {
      title: "Lavandina en Gel",
      image: "/images/product-lavandinas-gel.jpeg",
      description: "Protección familiar completa eliminando 99.9% de gérmenes y bacterias.",
    },
    {
      title: "Detergentes",
      image: "/images/product-detergentes.jpeg",
      description: "Poder desengrasante para mantener tu cocina siempre limpia.",
    },
  ]

  const additionalProducts = [
    {
      title: "Paños",
      image: "/images/product-panos.jpeg",
      description: "Paños de microfibra y multiuso para una limpieza sin rayas.",
    },
    {
      title: "Especialidades",
      image: "/images/product-especialidades.jpeg",
      description: "Productos específicos para manchas difíciles y superficies delicadas.",
    },
    {
      title: "Línea Profesional",
      image: "/images/product-linea-profesional.jpeg",
      description: "Soluciones de alta concentración para uso profesional y grandes superficies.",
    },
  ]

  const productsToDisplay = showMoreProducts ? [...initialProducts, ...additionalProducts] : initialProducts

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroCarousel />

      {/* Brands Section */}
      <section className="py-20 bg-white border-t-2 border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText>
              <div className="flex items-center space-x-4">
                <div className="flex-1 h-[1px] bg-black" />
                <h2 className="text-2xl lg:text-4xl font-medium font-myriad-pro text-black whitespace-nowrap tracking-wide">
                  ¡CONOCÉ NUESTRAS MARCAS!
                </h2>
                <div className="flex-1 h-[1px] bg-black" />
              </div>
              <p className="text-black text-md lg:text-2xl font-myriad-pro font-bold mt-4">
                ACOMPAÑÁNDOTE CON CALIDAD, CUIDADO Y CONFIANZA EN CADA RINCÓN DE TU HOGAR
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto mb-4">
            {[
              { src: "/images/logo-suiza.png", alt: "Suiza" , href: "/suiza"},
              { src: "/images/logo-clinsy.png", alt: "Clinsy", href: "/clinsy" },
              { src: "/images/logo-hornolim.png", alt: "Hornolim", href: "/hornolim" },
              { src: "/images/logo-limpialin.png", alt: "Limpialin", href: "/limpialin" },
            ].map((logo, index) => (
              <Link href={logo.href} key={index} className="group">
                <div className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-2 rounded-lg">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={400}
                    height={200}
                    className="object-contain max-h-26 w-auto transition duration-300 drop-shadow-md group-hover:drop-shadow-2xl"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { src: "/images/logo-suavitel-new.png", alt: "Suavitel", href: "/suavitel" },
              { src: "/images/logo-duft-new.png", alt: "Duft", href: "/duft" },
              { src: "/images/logo-acquapul.png", alt: "Acquapul", href: "/acquapul" },
            ].map((logo, index) => (
              <Link href={logo.href} key={index} className="group">
                <div className="flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-2 rounded-lg">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={150}
                    className="object-contain max-h-26 w-auto transition duration-300 drop-shadow-md group-hover:drop-shadow-2xl"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Products Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6">
          {/* Separator */}
          <div
            className="text-center w-full h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-sm shadow-xl mx-auto mb-16 flex items-center justify-center"
            style={{
              boxShadow:
                "0 8px 25px -5px rgba(153, 27, 27, 0.4), 0 4px 15px -3px rgba(153, 27, 27, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
            }}
          >
            <AnimatedText>
              <div className="flex items-center justify-center gap-4">
                <h2 className="text-2xl lg:text-4xl font-medium font-myriad-pro text-white whitespace-nowrap tracking-wide">
                  ¡DESCUBRÍ NUEVOS PRODUCTOS!
                </h2>
              </div>
            </AnimatedText>
          </div>

          {/* Products Grid based on screenshot */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {productsToDisplay.map((product, index) => (
              <Card key={index} className="family-card border-0 bg-gradient-to-r from-red-700 to-red-500 overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-myriad-pro">{product.description}</p>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold font-myriad-pro text-white">{product.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 mb-12">
            <Button
              onClick={() => setShowMoreProducts(!showMoreProducts)}
              className="family-btn-primary bg-red-600  hover:bg-red-500 text-2xl font-myriad-pro"
            >
              {showMoreProducts ? "Ocultar ⤴" : "VER MÁS ⤵"}
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-4 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl family-shadow overflow-hidden">
        <div className="p-[24px] lg:p-12 text-white mb-8">
          <div className="text-center mb-12">
            <AnimatedText>
              <h2 className="text-4xl lg:text-6xl font-medium font-myriad-pro mb-4">Tips de Limpieza</h2>
              <p className="text-blue-100 text-2xl font-myriad-pro">
                Consejos prácticos para mantener tu hogar impecable
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/kitchen-cleaning.webp",
                title: "5 pasos para una limpieza eficaz",
                description:
                  "Rutinas simples y efectivas para mantener tu hogar ordenado sin esfuerzo. Perfectas para familias ocupadas.",
              },
              {
                image: "/images/bathroom-cleaning.webp",
                title: "Cocina siempre limpia",
                description:
                  "Trucos de mamás expertas para mantener la cocina impecable todos los días, incluso con niños en casa.\n",
              },
              {
                image: "/images/floor-cleaning.webp",
                title: "Pisos que brillan",
                description:
                  "Cómo cuidar diferentes tipos de pisos para que siempre luzcan como nuevos y sean seguros para la familia.",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="bg-white border-0 bg-white soft-shadow hover:family-shadow transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-myriad-pro text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-myriad-pro whitespace-pre-line">
                    {article.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:bg-blue-50 p-0 h-10 font-semibold font-myriad-pro"
                  >
                    Leer consejos completos →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
