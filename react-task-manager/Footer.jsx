export default function Footer() {
  return (
    <footer className="text-center py-4 mt-8 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </footer>
  );
}
