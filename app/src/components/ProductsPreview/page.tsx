export default function ProductsPreview() {
  const products = [
    { name: "Onions", emoji: "🧅" },
    { name: "Spices", emoji: "🌶️" },
    { name: "Pulses", emoji: "🫘" },
    { name: "Seeds", emoji: "🌾" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Premium Products
        </h2>
        <div className="w-20 h-1 bg-primary-600  mx-auto mb-12"></div>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600  to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                {product.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">
                Premium quality {product.name.toLowerCase()} sourced from the
                best farms
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
