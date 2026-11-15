const stores = [
  {
    name: "Southlake Town Square",
    silver: false,
    spaceGray: false,
  },
  {
    name: "NorthPark Center",
    silver: false,
    spaceGray: false,
  },
  {
    name: "Stonebriar Centre",
    silver: false,
    spaceGray: false,
  },
  {
    name: "Galleria Dallas",
    silver: false,
    spaceGray: false,
  },
  {
    name: "University Park Village",
    silver: false,
    spaceGray: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          DFW HomeView Tracker
        </h1>

        <p className="text-gray-600 mb-8">
          Tracking Apple HomeView Standard Tabletop
          ($299) inventory across DFW Apple Stores.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {stores.map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-semibold mb-4">
                {store.name}
              </h2>

              <div className="mb-2">
                Silver:
                <span className="ml-2 text-red-600 font-medium">
                  Out of Stock
                </span>
              </div>

              <div>
                Space Gray:
                <span className="ml-2 text-red-600 font-medium">
                  Out of Stock
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}