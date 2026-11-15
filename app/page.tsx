const stores = [
  "Southlake Town Square",
  "NorthPark Center",
  "Stonebriar Centre",
  "Galleria Dallas",
  "University Park Village",
];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>DFW HomeView Tracker</h1>

      <p>
        Monitoring Apple HomeView Standard Tabletop ($299)
        in Silver and Space Gray.
      </p>

      <p>
        Last Updated: {new Date().toLocaleString()}
      </p>

      {stores.map((store) => (
        <div
          key={store}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>{store}</h2>

          <div>
            Silver:
            <span
              style={{
                color: "#dc2626",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Out of Stock
            </span>
          </div>

          <div>
            Space Gray:
            <span
              style={{
                color: "#dc2626",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              Out of Stock
            </span>
          </div>
        </div>
      ))}
    </main>
  );
}