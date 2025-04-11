"use client";
import { useState } from "react";
import sendEmail from "../../utils/emailService"; // Email gönderme servisini içe aktar

export default function Booking() {
  const [formData, setFormData] = useState({
    startDate: "", // Başlangıç tarihi
    endDate: "",   // Bitiş tarihi
    rentalType: "daily", // Default: Günlük kiralama
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
  
    // Seçilen ürünlerin toplamını hesapla
    formData.products.forEach((product) => {
      basePrice += productPrices[product];
    });
  
    const rentalDuration = calculateRentalDuration(); // gün farkı
  
    let totalPrice = basePrice * rentalDuration;
  
    // Haftalık ve üstü indirimler
    if (rentalDuration >= 30) {
      totalPrice *= 0.65; // %35 indirim
    } else if (rentalDuration >= 7) {
      totalPrice *= 0.8; // %20 indirim
    }
  
    return Math.round(totalPrice); // yuvarlanmış fiyat
  };
  

  // Kiralama süresi hesaplama (başlangıç ve bitiş tarihine göre)
  const calculateRentalDuration = () => {
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const timeDiff = endDate - startDate; // Zaman farkı
    const dayDiff = timeDiff / (1000 * 3600 * 24); // Gün farkı
    return dayDiff > 0 ? dayDiff : 1; // Gün sayısı 1'den küçük olamaz
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const reservationData = {
      name: formData.name,
      startDate: formData.startDate,
      endDate: formData.endDate,
      rentalType: formData.rentalType,
      products: formData.products,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      totalPrice: calculateTotal(),
    };
  
    try {
      // Backend'e POST isteği gönder
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData),
      });
  
      if (response.ok) {
        alert("Reservation confirmed!");
      } else {
        alert("There was an issue with your reservation.");
      }
  
      // E-posta gönder
      const reservationDetails = `
        Name: ${formData.name}
        Start Date: ${formData.startDate}
        End Date: ${formData.endDate}
        Products: ${formData.products.join(", ")}
        Rental Type: ${formData.rentalType}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Address: ${formData.address}
      `;
      sendEmail("owner-email@example.com", reservationDetails);  // Site sahibine e-posta gönderir
  
      alert(`Reservation submitted successfully! Total Price: $${calculateTotal()}`);
    } catch (error) {
      console.error("Error:", error);
    }
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
          Start Date:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required
            style={{ width: "100%", padding: "12px", marginTop: "5px" }}
          />
        </label>

        <label style={{ marginBottom: "10px", fontWeight: "bold" }}>
          End Date:
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required
            style={{ width: "100%", padding: "12px", marginTop: "5px" }}
          />
        </label>

        <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Rental Type</h2>
        <select name="rentalType" value={formData.rentalType} onChange={handleChange} style={{
          width: "100%", padding: "12px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc"
        }}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="seasonal">Seasonal</option>
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
