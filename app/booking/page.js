"use client";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    rentalType: "hourly", // Default: Saatlik kiralama
    products: [],
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // Ürünlerin fiyatları
  const productPrices = {
    sauna: 100,
    coldPlunge: 80,
    fireWoods: 30,
  };

  // Seçilen ürünlere göre toplam fiyatı hesapla
  const calculateTotal = () => {
    let basePrice = 0;
    
    formData.products.forEach((product) => {
      basePrice += productPrices[product];
    });

    // Eğer "Full Day" veya "Overnight" seçilmişse fiyatı artır
    if (formData.rentalType === "full-day") basePrice *= 1.5;
    if (formData.rentalType === "overnight") basePrice *= 2;

    return basePrice;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setFormData((prevData) => {
      const updatedProducts = prevData.products.includes(selectedProduct)
        ? prevData.products.filter((item) => item !== selectedProduct)
        : [...prevData.products, selectedProduct];

      return { ...prevData, products: updatedProducts };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData, "Total Price: $" + calculateTotal());
    alert("Proceeding to payment...\nTotal Price: $" + calculateTotal());
  };

  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      background: "linear-gradient(to right, #2c3e50, #4ca1af)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>Book Your Session</h1>
      <p style={{ fontSize: "1.4rem", marginBottom: "30px", maxWidth: "600px" }}>
        Select your preferred date and time for sauna and cold plunge rental.
      </p>

      <form 
        onSubmit={handleSubmit} 
        style={{ 
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          width: "450px",
          color: "#333"
        }}
      >
        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Rental Type</h2>
        <select name="rentalType" value={formData.rentalType} onChange={handleChange} style={{
          width: "100%", padding: "12px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc"
        }}>
          <option value="hourly">Hourly</option>
          <option value="full-day">Full Day (+50%)</option>
          <option value="overnight">Overnight (+100%)</option>
        </select>

        <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Select Products</h2>
        <label><input type="checkbox" value="sauna" onChange={handleProductChange} /> Sauna ($100)</label><br />
        <label><input type="checkbox" value="coldPlunge" onChange={handleProductChange} /> Cold Plunge Tub ($80)</label><br />
        <label><input type="checkbox" value="fireWoods" onChange={handleProductChange} /> Fire Woods ($30)</label><br />

        <h2 style={{ fontSize: "1.5rem", marginTop: "20px", color: "#2c3e50" }}>Contact Information</h2>
        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required 
            style={{ width: "100%", padding: "12px", marginTop: "5px" }} 
          />
        </label>

        <h2 style={{ fontSize: "1.5rem", marginTop: "20px", color: "#2c3e50" }}>Total Price: ${calculateTotal()}</h2>

        <button type="submit" style={{
          marginTop: "20px", padding: "15px", fontSize: "1.2rem", backgroundColor: "#ff7f50", 
          color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold"
        }}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
