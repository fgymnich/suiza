import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import Link from 'next/link';

export function SocialMediaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <AnimatedText>
            <h2 className="text-4xl lg:text-6xl font-medium font-myriad-pro text-gray-800 mb-6">
              Seguinos en nuestras
              <span className="text-red-600 block mt-2">Redes Sociales</span>
            </h2>
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-xl mx-auto">
          {/* Instagram Card */}
          <AnimatedText delay={200}>
            <a
              href="https://www.instagram.com/suiza.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="family-card-ns bg-transparent border-0 overflow-hidden shadow-none">
                <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-myriad-pro text-gray-800 hover:text-blue-300">@suiza.oficial</h3>
                </CardContent>
              </Card>
            </a>
          </AnimatedText>

          {/* Facebook Card */}
          <AnimatedText delay={400}>
            <a
              href="https://www.facebook.com/suiza.ok"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <Card className="family-card-ns bg-transparent border-0 overflow-hidden shadow-none">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-myriad-pro text-gray-800 hover:text-blue-300">Suiza Oficial</h3>
              </CardContent>
            </Card>
          </a>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
