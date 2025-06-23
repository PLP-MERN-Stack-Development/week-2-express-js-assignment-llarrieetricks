import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
