// src/pages/Posts.jsx
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 w-full mb-4 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id} className="p-4 border rounded bg-white dark:bg-gray-800">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
