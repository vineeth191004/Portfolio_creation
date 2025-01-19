import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'Understanding React', date: 'Dec 1, 2024', link: '#' },
    { title: 'CSS Tricks for Beginners', date: 'Nov 20, 2024', link: '#' },
    { title: 'Why Tailwind CSS?', date: 'Nov 10, 2024', link: '#' },
  ];

  return (
    <section id="blog" className="bg-gray-100 p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a href={post.link} className="text-blue-500 mt-2 block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
