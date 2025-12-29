import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../../constants/blogData";
import Loading from "../Loading";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
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
      const foundPost = blogPosts.find(p => p.slug === slug);

      if (foundPost) {
        setPost(foundPost);
      } else {
        // Invalid slug - redirect to blog list
        navigate("/blog", { replace: true });
      }
      setLoading(false);
    }
  }, [slug, navigate]);

  // Handle back to blog list
  const handleBackToList = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return <Loading message="Loading post..." />;
  }

  // Post not found
  if (!post) {
    return null;
  }

  return (
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
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />

            {/* Post meta information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-primary bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-secondary text-sm">
                  {post.readTime} read
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Post title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Post excerpt as highlight */}
            <p className="text-xl text-secondary mb-8 leading-relaxed border-l-4 border-primary pl-4">
              {post.excerpt}
            </p>

            {/* Post content with sanitized HTML */}
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{
                __html: sanitizeContent(post.content),
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
};

export default BlogPost;
