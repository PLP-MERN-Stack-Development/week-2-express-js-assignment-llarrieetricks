import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Posts from "./pages/Posts"; // <- Add this

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/posts" element={<Posts />} /> {/* <- Add this */}
        </Routes>
      </Layout>
    </Router>
  );
}

