import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero } from "./components";

const components = {
  About: lazy(() => import("./components/About")),
  Contact: lazy(() => import("./components/Contact")),
  Chat: lazy(() => import("./components/Chat")),
  Experience: lazy(() => import("./components/Experience")),
  Feedbacks: lazy(() => import("./components/Feedbacks")),
  StarsCanvas: lazy(() => import("./components/canvas/Stars")),
  Tech: lazy(() => import("./components/Tech")),
  Works: lazy(() => import("./components/Works")),
  Footer: lazy(() => import("./components/Footer")),
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense>
          {[
            components.About,
            components.Experience,
            components.Tech,
            components.Works,
            components.Feedbacks,
          ].map((Component, index) => (
            <Component key={index} />
          ))}

          <div className="relative z-0">
            {[
              components.Contact,
              components.Chat,
              components.StarsCanvas,
              components.Footer,
            ].map((Component, index) => (
              <Component key={index} />
            ))}
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
