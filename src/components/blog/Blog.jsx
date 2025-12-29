import { useNavigate } from "react-router-dom";

import { blogPosts } from "../../constants/blogData";

const Blog = () => {
  const navigate = useNavigate();

  // Handle post selection
  const handlePostSelect = post => {
    navigate(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Blog description */}
        <p className="text-secondary text-xl text-center mb-12 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, React,
          JavaScript and more.
        </p>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="group bg-tertiary rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => handlePostSelect(post)}
            >
              {/* Post thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="text-primary bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-secondary line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-secondary text-sm">
                      {post.readTime} read
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <button className="text-white hover:text-primary transition-colors flex items-center gap-1">
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
