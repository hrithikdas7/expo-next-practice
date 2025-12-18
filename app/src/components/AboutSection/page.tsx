import { Globe } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-linear-to-br from-green-100 to-green-50 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe size={200} className="text-green-600 opacity-20" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-600  rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          🌍
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">
                          Global Reach
                        </div>
                        <div className="text-sm text-gray-600">
                          Connecting Markets Worldwide
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Delivering Quality, Building
                <span className="text-green-600"> Global Connections</span>
              </h2>
              <div className="w-20 h-1 bg-primary-600  mb-6"></div>

              <p className="text-gray-700 mb-4">
                At{" "}
                <span className="font-semibold text-green-700">
                  Sambhav Exporter
                </span>
                , we believe in offering more than products — we deliver{" "}
                <span className="font-semibold">freshness</span>,{" "}
                <span className="font-semibold">purity</span>, and{" "}
                <span className="font-semibold">trust</span>. With a vision to
                supply India's finest{" "}
                <span className="font-semibold text-green-700">
                  Onions, Spices, Moringa Powder, Pulses, Cumin Seeds, Turmeric,
                  Black Pepper, and Sesame Seeds
                </span>{" "}
                to global markets, we ensure every shipment reflects{" "}
                <span className="font-semibold">quality</span> and authenticity.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection