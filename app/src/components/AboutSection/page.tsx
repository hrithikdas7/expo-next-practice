import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.png"
                alt="Premium Indian Spices and Products"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
                      Global Reach
                    </h3>
                    <p className="text-white/90 text-sm font-medium drop-shadow-lg">
                      Connecting Markets Worldwide
                    </p>
                  </div>
                  <div className="w-20 h-20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <span className="text-6xl drop-shadow-2xl relative">🌍</span>
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