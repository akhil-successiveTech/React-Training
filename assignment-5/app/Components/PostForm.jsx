"use client";

import React, { useState } from "react";
import axios from "axios";

export default function PostForm() {
//   Created for user to give title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
//   Created for loading status
  const [loading, setLoading] = useState(false);
//   Created to check success status
  const [success, setSuccess] = useState(null);
//   Created for errors
  const [error, setError] = useState(null);

//   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
        // Post request using axios
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {title, body: content});
      console.log(res.data)
      setSuccess("Post submitted successfully! ID: " + res.data.id);
      setTitle("");
      setContent("");
    } catch (err) {
      setError("Failed to submit post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          style={{border: "2px solid black"}}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={loading}
        />

        <label>Content:</label>
        <textarea
          id="content"
          value={content}
          style={{border: "2px solid black"}}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={loading}
          rows={5}
        />

        <button type="submit" style={{border: "2px solid black"}} disabled={loading}>
          {loading ? "Submitting..." : "Submit Post"}
        </button>
      </form>

    {/* Prints success and error according to the condition(Conditional Rendering)*/}
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}
    </>
  );
}
