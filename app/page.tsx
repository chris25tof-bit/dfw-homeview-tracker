import { getAppleInventory } from "@/lib/apple";

export default async function Home() {
  const stores = await getAppleInventory();

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
      </p>

      <p>
        Last Updated: {new Date().toLocaleString()}
      </p>

      {stores.map((store) => (
        <div
          key={store.store}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>{store.store}</h2>

          <p>
            Silver: {store.silver ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <p>
            Space Gray: {store.spaceGray ? "✅ In Stock" : "❌ Out of Stock"}
          </p>
        </div>
      ))}
    </main>
  );
}
