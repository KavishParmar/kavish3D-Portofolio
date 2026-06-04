import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
import { LoadingProvider } from "./context/LoadingProvider";
import { NavigationTransitionProvider } from "./context/NavigationTransition";

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <NavigationTransitionProvider>
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  <MainContainer>
                    <Suspense fallback={null}>
                      <CharacterModel />
                    </Suspense>
                  </MainContainer>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={null}>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route
                path="/work"
                element={
                  <Suspense fallback={null}>
                    <WorkPage />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={null}>
                    <ContactPage />
                  </Suspense>
                }
              />
            </Routes>
          </Suspense>
        </NavigationTransitionProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;
