import Layout from "../layout/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Task Manager</h2>

      <Card title="Quick Actions">
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    </Layout>
  );
}
