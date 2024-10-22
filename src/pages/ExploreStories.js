import React from "react";
import localImage from "../assets/images/istockphoto-801340864-1024x1024.jpg";
import localImage1 from "../assets/images/istockphoto-1451866244-612x612.jpg";
import localImage2 from "../assets/images/love.jpg";

// Placeholder data for stories
const stories = [
  {
    id: 1,
    title: "A Journey of Self-Discovery",
    content: "Discover the path of self-reflection and personal growth in this heartwarming story of transformation.",
    author: "Jane Doe",
    date: "September 21, 2024",
    image: localImage
  },
  {
    id: 2,
    title: "Overcoming Obstacles",
    content: "An inspiring tale of overcoming life's greatest challenges and achieving success.",
    author: "John Smith",
    date: "October 5, 2024",
    image:localImage1
  },
  {
    id: 3,
    title: "A Heartfelt Narrative",
    content: "Dive into a touching story about love, friendship, and the bonds that shape our lives.",
    author: "Sarah Lee",
    date: "October 18, 2024",
    image: localImage2
  }
];

const ExploreStories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Explore Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-500 hover:shadow-2xl"
          >
            {/* Story Image */}
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-6">
              {/* Story Title */}
              <h3 className="text-3xl font-semibold mb-3 text-gray-900">
                {story.title}
              </h3>

              {/* Author and Date */}
              <p className="text-sm text-gray-500 mb-4">
                By {story.author} | {story.date}
              </p>

              {/* Story Preview */}
              <p className="text-gray-700 mb-6">
                {story.content.length > 120
                  ? `${story.content.substring(0, 120)}...`
                  : story.content}
              </p>

              {/* Read More Button */}
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreStories;
