export default function Home() {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      backgroundImage: "url('/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to ACK Steam</h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        Experience the best portable sauna and cold plunge rentals in Nantucket.
      </p>
      <a href="/booking" style={{
        marginTop: "20px",
        padding: "15px 30px",
        fontSize: "1.2rem",
        backgroundColor: "#ff7f50",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
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
