export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 p-8 text-center text-white">
      <p>&copy; {currentYear} CENAMARK SHIPPING LINES. All rights reserved.</p>
    </footer>
  );
}
