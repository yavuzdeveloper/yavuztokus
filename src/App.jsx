import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Hero } from "./components";
import Loading from "./components/Loading";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Chat = lazy(() => import("./components/Chat"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/blog/Blog"));
const BlogPost = lazy(() => import("./components/blog/BlogPost"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <Chat />
                  <StarsCanvas />
                </div>
                <Footer />
              </Suspense>
            }
          />

          {/* Blog routes */}
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loading />}>
                <Navbar />
                <Blog />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<Loading />}>
                <Navbar />
                <BlogPost />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Navbar />
                <NotFound />
                <Footer />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
