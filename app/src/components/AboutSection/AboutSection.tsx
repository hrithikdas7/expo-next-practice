import React from 'react'
import Image from 'next/image'
import { TrendingUp, Award } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="relative py-12 px-4 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-50/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-300 mb-4">
            <Award className="w-4 h-4 text-primary-700" />
            <span className="text-sm font-semibold text-primary-800 tracking-wide">ABOUT US</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/about.png"
                alt="Premium Indian Spices and Products"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-800/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
                      Global Reach
                    </h3>
                    <p className="text-white/95 text-sm font-medium drop-shadow-lg">
                      Connecting Markets Worldwide
                    </p>
                  </div>
                  <div className="w-20 h-20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <div className="absolute w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <span className="text-6xl drop-shadow-2xl relative">🌍</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-black text-primary-900 mb-6 leading-tight">
              Sambhav Export is a story rooted in the soil.
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"></div>
              <div className="h-1 w-8 bg-primary-300 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over five decades and three generations, our family has lived and worked alongside the land, cultivating onions and supplying them across domestic markets. What began as a livelihood slowly became a legacy — built on early mornings in the fields, honest trade, and an unwavering belief in quality.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Today, the fourth generation steps forward with a larger dream. With respect for our past and a vision for the future, we are expanding beyond borders to share India’s finest produce with the world. Along with onions, we proudly export <span className="font-semibold text-primary-700">grapes, green chillies, and capsicum</span>, grown and sourced with the same care that defined our journey from the beginning.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Sambhav Export, every shipment carries more than produce — it carries generations of <span className="font-semibold text-primary-800">trust, hard work, and passion</span> from our fields to global markets.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="relative group/stat">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl opacity-0 group-hover/stat:opacity-10 blur transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-200 shadow-md hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
                  <div className="text-4xl font-black text-primary-700 mb-1">500+</div>
                  <div className="text-sm font-medium text-gray-700">Happy Clients Worldwide</div>
                </div>
              </div>
              <div className="relative group/stat">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl opacity-0 group-hover/stat:opacity-10 blur transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-200 shadow-md hover:shadow-lg transition-shadow">
                  <Award className="w-8 h-8 text-primary-600 mb-2" />
                  <div className="text-4xl font-black text-primary-700 mb-1">25+</div>
                  <div className="text-sm font-medium text-gray-700">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection