import "./globals.css";

export const metadata = {
  title: "Netflix Lite",
  description: "Movie Discovery App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}