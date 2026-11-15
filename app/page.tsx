async function getInventory() {
  const res = await fetch(
    "https://dfw-homeview-tracker.chris25tof.workers.dev/api/inventory",
    {
      cache: "no-store",
    }
  );

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
      }}
    >
      <h1>DFW HomeView Tracker</h1>

      <p>
        Monitoring Apple HomeView Standard Tabletop ($299)
      </p>

      <p>
        Last Updated:
        {" "}
        {new Date(data.updatedAt).toLocaleString()}
      </p>

      {data.stores.map((store: any) => (
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
            Silver:
            {" "}
            {store.silver ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <p>
            Space Gray:
            {" "}
            {store.spaceGray ? "✅ In Stock" : "❌ Out of Stock"}
          </p>
        </div>
      ))}
    </main>
  );
}