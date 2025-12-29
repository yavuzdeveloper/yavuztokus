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
        return `<div class="code-container">
          <pre><code class="language-javascript">${encodedCode}</code></pre>
        </div>`;
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
          <article className="bg-tertiary rounded-xl p-6 md:p-8 border border-gray-800">
            {/* Featured image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-xl mb-6 md:mb-8"
            />

            {/* Post meta information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
              <div className="flex items-center space-x-3">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              {post.title}
            </h1>

            {/* Post excerpt as highlight */}
            <p className="text-lg md:text-xl text-secondary mb-6 md:mb-8 leading-relaxed border-l-4 border-primary pl-3 md:pl-4">
              {post.excerpt}
            </p>

            {/* Post content with sanitized HTML */}
            <div
              className="prose prose-sm md:prose-base lg:prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{
                __html: sanitizeContent(post.content),
              }}
              style={{
                color: "white",
                lineHeight: "1.7",
              }}
            />
          </article>
        </div>
      </div>

      {/* CSS for code containers */}
      <style jsx>{`
        .blog-content pre {
          margin: 0;
          padding: 0;
          background: transparent;
        }

        .blog-content .code-container {
          position: relative;
          margin: 1.5rem 0;
          background: #1e1e1e;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #333;
        }

        .blog-content .code-container pre {
          padding: 1rem;
          margin: 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .blog-content .code-container code {
          font-family: "Fira Code", "Monaco", "Consolas", monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          white-space: pre;
          word-break: normal;
          word-wrap: normal;
        }

        /* Scrollbar styling */
        .blog-content .code-container pre::-webkit-scrollbar {
          height: 8px;
        }

        .blog-content .code-container pre::-webkit-scrollbar-track {
          background: #2d2d2d;
          border-radius: 4px;
        }

        .blog-content .code-container pre::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 4px;
        }

        .blog-content .code-container pre::-webkit-scrollbar-thumb:hover {
          background: #777;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .blog-content .code-container {
            margin: 1rem -0.5rem;
            border-radius: 6px;
          }

          .blog-content .code-container pre {
            padding: 0.75rem;
          }

          .blog-content .code-container code {
            font-size: 0.8125rem;
          }
        }

        /* Line numbers (optional) */
        .blog-content .code-container.with-line-numbers {
          counter-reset: line;
        }

        .blog-content .code-container.with-line-numbers code {
          counter-increment: line;
        }

        .blog-content .code-container.with-line-numbers code:before {
          content: counter(line);
          display: inline-block;
          width: 2em;
          margin-right: 1em;
          padding-right: 0.5em;
          text-align: right;
          color: #666;
          border-right: 1px solid #444;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
