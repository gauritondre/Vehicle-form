import React, { useEffect, useState } from "react";
import axios from "axios";

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get("http://localhost:4002/getbrands");
        setBrands(res.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Available Brands
      </h2>

      {brands.length === 0 ? (
        <p className="text-center text-gray-500">Loading brands...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Brands;
