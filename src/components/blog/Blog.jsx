import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { blogPosts } from "../../constants/blogData";
import Loading from "../Loading";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  // Function to encode HTML entities for security
  const encodeHTML = str => {
    return str
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  // Sanitize code blocks to make HTML safe
  const sanitizeContent = content => {
    return content.replace(
      /<pre><code class="language-[^"]*">([\s\S]*?)<\/code><\/pre>/g,
      (match, codeContent) => {
        const encodedCode = encodeHTML(codeContent);
        return `<pre><code class="language-javascript">${encodedCode}</code></pre>`;
      }
    );
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      const post = blogPosts.find(post => post.slug === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        navigate("/blog", { replace: true });
      }
      setLoading(false);
    }
  }, [slug, navigate]);

  // Handle post selection with URL update
  const handlePostSelect = post => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle back to blog list with URL update
  const handleBackToList = () => {
    setSelectedPost(null);
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Blog list view component
  const BlogList = () => (
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

  // Blog detail view component
  const BlogDetail = () => (
    <div className="min-h-screen bg-primary pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog list button */}
          <button
            onClick={handleBackToList}
            className="flex items-center text-secondary hover:text-white mb-8 transition-colors text-lg font-medium"
          >
            <span className="mr-2">←</span>
            Back to All Posts
          </button>

          {/* Blog post article */}
          <article className="bg-tertiary rounded-xl p-8 border border-gray-800">
            {/* Featured image */}
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />

            {/* Post meta information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-primary bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <span className="text-secondary text-sm">
                  {selectedPost.readTime} read
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                {new Date(selectedPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Post title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {selectedPost.title}
            </h1>

            {/* Post excerpt as highlight */}
            <p className="text-xl text-secondary mb-8 leading-relaxed border-l-4 border-primary pl-4">
              {selectedPost.excerpt}
            </p>

            {/* Post content with sanitized HTML */}
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{
                __html: sanitizeContent(selectedPost.content),
              }}
              style={{
                color: "white",
                lineHeight: "1.8",
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );

  // Loading state
  if (loading) {
    return <Loading message="Loading post..." />;
  }

  // Invalid slug - redirect to blog list
  if (slug && !selectedPost) {
    return null;
  }

  return selectedPost ? <BlogDetail /> : <BlogList />;
};

export default Blog;
