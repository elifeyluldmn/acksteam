"use client";

export default function Contact() {
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
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>Contact Us</h1>
      <p style={{ fontSize: "1.4rem", maxWidth: "700px", lineHeight: "1.6" }}>
        Have questions or need assistance? Feel free to reach out to us!
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
        <h2 style={{ fontSize: "2rem", color: "#2c3e50" }}>Get in Touch</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>We are happy to assist you!</p>

        <p><b>Email:</b> <a href="mailto:info@acksteam.com" style={{ color: "#007bff", textDecoration: "none" }}>info@acksteam.com</a></p>
        <p><b>Phone:</b> <a href="tel:+15081234567" style={{ color: "#007bff", textDecoration: "none" }}>(508) 123-4567</a></p>
        <p><b>Location:</b> Nantucket, MA</p>
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
        transition: "background-color 0.3s ease",
      }}>
        Book Now
      </a>
    </div>
  );
}
