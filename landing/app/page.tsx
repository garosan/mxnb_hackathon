import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Target, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const heroBackgroundUrl =
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 37, 59, 0.4), rgba(30, 37, 59, 0.4)), url(${heroBackgroundUrl})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ahorra en grupo,{" "}
              <span className="text-[#bbe6c5]">gana más juntos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Únete con tus amigos para ahorrar en pesos mexicanos y ganar
              rendimientos automáticos con DeFi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#bbe6c5] hover:bg-[#a8d4b2] text-[#1e253b] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Crear un Pool
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e253b] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Unirme a un Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e253b] mb-4">
              ¿Por qué elegir PoolAmigos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La forma más inteligente de ahorrar con tus seres queridos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#1e253b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Ahorra en Grupo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Únete con tus amigos o familia para alcanzar metas financieras
                  compartidas de manera divertida y motivadora.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#1e253b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Rendimiento DeFi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gana rendimientos automáticamente mientras ahorras. Tu dinero
                  trabaja para ti las 24 horas del día.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-[#1e253b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Metas Claras
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Establece objetivos específicos como viajes, regalos o
                  emergencias y sigue tu progreso en tiempo real.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-[#1e253b]" />
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Seguro y Transparente
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tecnología blockchain que garantiza la seguridad de tus fondos
                  con total transparencia en cada transacción.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e253b] mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En solo 3 pasos simples estarás ahorrando con tus amigos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-20 h-20 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[#1e253b]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Crea o Únete
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Crea un nuevo pool para tu meta o únete a uno existente con el
                  código de invitación de tus amigos.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#bbe6c5] opacity-30 z-0"></div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-20 h-20 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[#1e253b]">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Ahorra Juntos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cada miembro contribuye regularmente. Establece metas, fechas
                  límite y montos que funcionen para todos.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#bbe6c5] opacity-30 z-0"></div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#bbe6c5] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#1e253b]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e253b] mb-3">
                  Gana y Disfruta
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gana rendimientos automáticos mientras ahorras y alcanza tu
                  meta para disfrutar juntos del resultado.
                </p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-8 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1e253b] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1e253b]">
                    Amigos
                  </span>
                </div>
                <div className="text-[#bbe6c5]">→</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#bbe6c5] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-[#1e253b]">$</span>
                  </div>
                  <span className="text-sm font-medium text-[#1e253b]">
                    Pool
                  </span>
                </div>
                <div className="text-[#bbe6c5]">→</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1e253b] rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1e253b]">
                    Meta
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-[#1e253b]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para empezar a ahorrar?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Únete a miles de usuarios que ya están alcanzando sus metas
              financieras con PoolAmigos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#bbe6c5] hover:bg-[#a8d4b2] text-[#1e253b] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Crear un Pool
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#bbe6c5] text-[#bbe6c5] hover:bg-[#bbe6c5] hover:text-[#1e253b] font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Unirme a un Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-[#1e253b]">PoolAmigos</h3>
              <p className="text-gray-600">Ahorra más, juntos</p>
            </div>
            <nav className="flex gap-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#1e253b] transition-colors"
              >
                Términos
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#1e253b] transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#1e253b] transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className="mt-6 pt-6 border-t text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} PoolAmigos. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
