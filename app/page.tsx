import { getInventoryData, PRODUCTS } from "@/lib/apple";

export default async function Home() {
  const data = await getInventoryData();

  const silverCount = data.stores.filter(
    (store) => store.silver
  ).length;

  const spaceGrayCount = data.stores.filter(
    (store) => store.spaceGray
  ).length;

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
        Last Updated:{" "}
        {new Date(data.updatedAt).toLocaleString()}
      </p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2>Status Summary</h2>

        <p>
          Silver Available In: {silverCount} store(s)
        </p>

        <p>
          Space Gray Available In: {spaceGrayCount} store(s)
        </p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Products</h2>

        <p>
          <a
            href={PRODUCTS.silver.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple HomeView Silver
          </a>
        </p>

        <p>
          <a
            href={PRODUCTS.spaceGray.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple HomeView Space Gray
          </a>
        </p>
      </div>

      {data.stores.map((store) => (
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
            {store.silver
              ? "✅ In Stock"
              : "❌ Out of Stock"}
          </p>

          <p>
            Space Gray:{" "}
            {store.spaceGray
              ? "✅ In Stock"
              : "❌ Out of Stock"}
          </p>
        </div>
      ))}
    </main>
  );
}