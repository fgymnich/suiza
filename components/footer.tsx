import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo-villard-louis-white.png"
                alt="Villard & Louis"
                width={300}
                height={69}
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-myriad-pro">Productos</h4>
            <div className="space-y-2 text-gray-300 font-myriad-pro">
              {[
                'Suiza',
                'Hornolim',
                'Limpialin',
                'Clinsy',
                'Suavitel',
                'Duft',
                'Acquapul',
              ].map((brand) => (
                <Link
                  key={brand}
                  href={`/${brand.toLowerCase()}`}
                  className="block hover:text-white transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-myriad-pro">Ayuda</h4>
            <div className="space-y-2 text-gray-300 font-myriad-pro">
              <Link href="/consejos" className="block hover:text-white transition-colors">
                Consejos de Limpieza
              </Link>
              <Link href="/preguntas" className="block hover:text-white transition-colors">
                Preguntas Frecuentes
              </Link>
              <Link href="/contacto" className="block hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/donde-comprar" className="block hover:text-white transition-colors">
                Dónde Comprar
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold font-myriad-pro">Contacto</h4>
            <div className="space-y-2 text-gray-300 font-myriad-pro">
              <p>info@procenex.com.ar</p>
              <p>0800-PROCENEX</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/70 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-white/80 font-myriad-pro">
              <Link href="/privacidad" className="hover:text-blue-300 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-blue-300 transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/cookies" className="hover:text-blue-300 transition-colors">
                Cookies
              </Link>
            </div>
            <p className="text-sm text-white/70 font-myriad-pro">
              © 2024 Villard & Louis. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
