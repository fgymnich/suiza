import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-2 text-lg font-myriad-pro text-gray-600">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className={`text-${brandData.colors.accent} font-semibold`}>{brandData.name}</span>
        </div>
      </div>
  );
};

export default Footer;
