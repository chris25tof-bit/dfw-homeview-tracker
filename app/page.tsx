const stores = [
  "Southlake Town Square",
  "NorthPark Center",
  "Stonebriar Centre",
  "Galleria Dallas",
  "University Park Village",
];

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>DFW HomeView Tracker</h1>

      <p>
        Monitoring Apple HomeView Standard Tabletop
        ($299)
      </p>

      <div style={{ marginTop: "2rem" }}>
        {stores.map((store) => (
          <div
            key={store}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <h2>{store}</h2>

            <p>Silver: Out of Stock</p>
            <p>Space Gray: Out of Stock</p>
          </div>
        ))}
      </div>
    </main>
  );
}