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
              className="bg-tertiary rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => handlePostSelect(post)}
            >
              {/* Post thumbnail */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Post meta information */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-secondary text-sm">
                    {post.readTime}
                  </span>
                </div>
                {/* Post title */}
                <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                {/* Post excerpt */}
                <p className="text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                {/* Post footer with date and read more */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <button className="text-white hover:text-primary transition-colors">
                    Read More →
                  </button>
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
