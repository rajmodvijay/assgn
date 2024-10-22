import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-center mb-10">What People Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">"My Home is an amazing platform to share my stories."</p>
          <h4 className="font-bold">- Jane Doe</h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">"I've met so many like-minded individuals here."</p>
          <h4 className="font-bold">- John Smith</h4>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">"A great way to express creativity and connect."</p>
          <h4 className="font-bold">- Sarah Lee</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
