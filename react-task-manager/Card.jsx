export default function Card({ title, children }) {
  return (
    <div className="border rounded shadow p-4 bg-white dark:bg-gray-800 dark:text-white">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
