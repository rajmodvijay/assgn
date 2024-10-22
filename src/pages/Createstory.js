import React, { useState } from "react";
import bgImage from "../assets/images/share.jpg"; // Import the background image

const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Validate story title and content
  const validateStory = () => {
    if (title.trim().length < 3) {
      return "Title must be at least 3 characters long.";
    }
    if (content.trim().length < 10) {
      return "Content must be at least 10 characters long.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateStory();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    alert("Story submitted successfully!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left aligned form */}
      <div className="w-full max-w-4xl mx-auto flex justify-start">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg">
          <h2 className="text-5xl font-extrabold text-left mb-10 text-gray-800">
            Share Your Story
          </h2>

          {/* Validation Error Message */}
          {error && <p className="text-red-500 mb-6">{error}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold text-lg mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your story title"
              />
            </div>

            {/* Content Field */}
            <div className="mb-6">
              <label
                htmlFor="content"
                className="block text-gray-700 font-semibold text-lg mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write your story..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
