"use client";

export default function About() {
    return (
      <div style={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(to right, #2c3e50, #4ca1af)", // Koyu mavi arka plan
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>About ACK Steam</h1>
        <p style={{ fontSize: "1.4rem", maxWidth: "700px", lineHeight: "1.6" }}>
          ACK Steam brings the ultimate relaxation experience to Nantucket. Our portable saunas and cold plunge tubs are perfect for rejuvenation and wellness.
        </p>
  
        <div style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          width: "600px",
          color: "#333",
          marginTop: "30px"
        }}>
          <h2 style={{ fontSize: "2rem", color: "#2c3e50" }}>Why Choose Us?</h2>
          <ul style={{ textAlign: "left", fontSize: "1.2rem", lineHeight: "1.8" }}>
            <li>🚀 **Portable & Convenient** - We deliver directly to your location.</li>
            <li>🔥 **Premium Sauna Experience** - Authentic heat therapy for deep relaxation.</li>
            <li>❄️ **Cold Plunge Therapy** - Boost circulation and muscle recovery.</li>
            <li>🌊 **Perfect for Events & Wellness** - Ideal for beachside retreats, homes, or special occasions.</li>
          </ul>
        </div>
  
        <a href="/booking" style={{
          marginTop: "40px",
          padding: "15px 30px",
          fontSize: "1.2rem",
          backgroundColor: "#ff7f50",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#e76f51"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#ff7f50"}
        >
          Book Now
        </a>
        <a href="/contact" style={{
  marginTop: "20px",
  padding: "15px 30px",
  fontSize: "1.2rem",
  backgroundColor: "#3498db", /* Mavi renk */
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
  display: "inline-block"
}}>
  Contact Us
</a>

      </div>
    );
  }
  