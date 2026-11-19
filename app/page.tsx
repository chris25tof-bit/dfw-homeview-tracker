import { getInventoryData, PRODUCTS } from "@/lib/apple";

function renderStatus(status: string) {
  switch (status) {
    case "in-stock":
      return "🟢 In Stock";

    case "available-to-order":
      return "🟡 Available to Order";

    case "unavailable":
      return "🔴 Unavailable";

    default:
      return "⚪ Unknown";
  }
}

export default async function Home() {
  const data = await getInventoryData();

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

        <p>Live inventory integration coming next.</p>
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
            Silver: {renderStatus(store.silver.status)}
            <br />
            <small>{store.silver.message}</small>
          </p>

          <p>
            Space Gray: {renderStatus(store.spaceGray.status)}
            <br />
            <small>{store.spaceGray.message}</small>
          </p>
        </div>
      ))}
    </main>
  );
}