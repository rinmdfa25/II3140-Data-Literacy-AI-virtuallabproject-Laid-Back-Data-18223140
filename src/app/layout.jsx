import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Laid-Back Data",
  description: "Your Data Literacy Virtual Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-400 to-teal-800 text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex">{children}</main>
        <footer className="bg-teal-600 p-4 text-center text-white">
          <p>&copy; 2025 Laid-Back Data. All Right Reserved. Created by 18223140 - Raihan Muhammad Daffa</p>
        </footer>
      </body>
    </html>
  );
}
