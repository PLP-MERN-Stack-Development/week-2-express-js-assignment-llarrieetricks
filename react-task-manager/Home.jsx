// Import the reusable Button and Card components
import Button from "../components/Button";
import Card from "../components/Card";

// Define the Home component
export default function Home() {
  return (
    // Main container with Tailwind styling
    <div className="text-center mt-10 space-y-4">

      {/* Title heading */}
      <h1 className="text-3xl font-bold">Welcome to the Task Manager</h1>

      {/* Card component to test layout and reuse */}
      <Card title="Test Card">
        <p>This is inside a reusable card.</p>
      </Card>

      {/* Group of Buttons to test variant styling */}
      <div className="space-x-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Task Manager</h1>
      <p className="text-gray-600 mt-2">Manage your tasks efficiently!</p>
    </div>
  );
}

