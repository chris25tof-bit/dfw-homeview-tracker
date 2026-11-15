import "./globals.css";

export const metadata = {
  title: "DFW HomeView Tracker",
  description: "Track Apple HomeView availability",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}