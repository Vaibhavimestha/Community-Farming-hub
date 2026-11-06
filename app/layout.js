import "./globals.css";

export const metadata = {
  title: "GrowTogether | Community Farming Hub",
  description:
    "Connecting local farmers directly with buyers through fresh produce and sustainable agriculture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}