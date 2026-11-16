import { StoreInventory } from "@/types/inventory";

async function getInventory() {
  const res = await fetch(
    "http://localhost:3000/api/inventory",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch inventory");
  }

  return res.json();
}

export default async function Home() {
  const data = await getInventory();

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
        Last Updated{" "}
        {new Date(data.updatedAt).toLocaleString()}
      </p>

      {data.stores.map((store: StoreInventory) => (
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
            Silver:{" "}
            <span
              style={{
                color: store.silver ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {store.silver
                ? "✅ In Stock"
                : "❌ Out of Stock"}
            </span>
          </p>

          <p>
            Space Gray:{" "}
            <span
              style={{
                color: store.spaceGray ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {store.spaceGray
                ? "✅ In Stock"
                : "❌ Out of Stock"}
            </span>
          </p>
        </div>
      ))}
    </main>
  );
}