import React, { useState, useEffect } from "react";

function UpdateForm({ brandId }) {
  const [brandData, setBrandData] = useState(null);
  const [vehicleData, setVehicleData] = useState([]);
  const [brandImage, setBrandImage] = useState(null);
  const [vehicleImage, setVehicleImage] = useState(null);

  //  Fetch existing brand + vehicle details (mock or API)
//   useEffect(() => {
//     // Replace this with your actual API call
//     const fetchBrandDetails = async () => {
//       try {
//         // Example API
//         const response = await fetch(`https://yourapi.com/brands/${brandId}`);
//         const data = await response.json();
//         setBrandData(data.brand);
//         setVehicleData(data.vehicles);
//       } catch (error) {
//         console.error("Error fetching brand data:", error);
//       }
//     };
//     fetchBrandDetails();
//   }, [brandId]);

useEffect(() => {
  // Temporary mock data for UI testing
  const mockData = {
    brand: {
      name: "Toyota",
      year: 2021,
      is_exist: "yes",
      country: "Japan",
    },
    vehicles: [
      {
        name: "Corolla",
        color: "White",
        price: 1500000,
      },
    ],
  };

  setBrandData(mockData.brand);
  setVehicleData(mockData.vehicles);
}, []);


  // Handle brand field updates
  const handleBrandChange = (e) => {
    const { name, value } = e.target;
    setBrandData({ ...brandData, [name]: value });
  };

  // Handle vehicle field updates
  const handleVehicleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVehicles = [...vehicleData];
    updatedVehicles[index][name] = value;
    setVehicleData(updatedVehicles);
  };

  //  Handle image updates
  const handleBrandImageChange = (e) => setBrandImage(e.target.files[0]);
  const handleVehicleImageChange = (e) => setVehicleImage(e.target.files[0]);

  //  Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Add brand data
    formData.append("name", brandData.name);
    formData.append("year", brandData.year);
    formData.append("is_exist", brandData.is_exist);
    formData.append("country", brandData.country);

    // Add brand image only if user selected a new one
    if (brandImage) {
      formData.append("brandImage", brandImage);
    }

    // Add vehicle data (for simplicity, assume one vehicle)
    formData.append("vehicleName", vehicleData[0].name);
    formData.append("vehicleColor", vehicleData[0].color);
    formData.append("vehiclePrice", vehicleData[0].price);

    if (vehicleImage) {
      formData.append("vehicleImage", vehicleImage);
    }

    try {
      const response = await fetch(`https://yourapi.com/brands/${brandId}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        alert("Brand and vehicle updated successfully!");
      } else {
        alert("Failed to update. Please try again.");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (!brandData) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Update Brand & Vehicle</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* BRAND SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Brand Details</h3>
          <input
            type="text"
            name="name"
            value={brandData.name || ""}
            onChange={handleBrandChange}
            placeholder="Brand Name"
            className="border p-2 rounded w-full mb-3"
          />
          <input
            type="number"
            name="year"
            value={brandData.year || ""}
            onChange={handleBrandChange}
            placeholder="Brand Year"
            className="border p-2 rounded w-full mb-3"
          />
          <select
            name="country"
            value={brandData.country || ""}
            onChange={handleBrandChange}
            className="border p-2 rounded w-full mb-3"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
          </select>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-600">Brand Image</label>
            <input
              type="file"
              onChange={handleBrandImageChange}
              className="mt-1 block w-full"
            />
            {!brandImage && (
              <p className="text-sm text-gray-500 mt-1">Current Image will remain unchanged if no new file selected.</p>
            )}
          </div>
        </div>

        {/* VEHICLE SECTION */}
        {vehicleData.map((vehicle, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Vehicle Details</h3>
            <input
              type="text"
              name="name"
              value={vehicle.name || ""}
              onChange={(e) => handleVehicleChange(index, e)}
              placeholder="Vehicle Name"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="text"
              name="color"
              value={vehicle.color || ""}
              onChange={(e) => handleVehicleChange(index, e)}
              placeholder="Vehicle Color"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="number"
              name="price"
              value={vehicle.price || ""}
              onChange={(e) => handleVehicleChange(index, e)}
              placeholder="Vehicle Price"
              className="border p-2 rounded w-full mb-3"
            />

            <div>
              <label className="block text-sm font-medium text-gray-600">Vehicle Image</label>
              <input
                type="file"
                onChange={handleVehicleImageChange}
                className="mt-1 block w-full"
              />
              {!vehicleImage && (
                <p className="text-sm text-gray-500 mt-1">Current Image will remain unchanged if no new file selected.</p>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
