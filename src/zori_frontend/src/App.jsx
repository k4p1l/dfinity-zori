import * as zori_backend from "declarations/zori_backend";
import React, { useEffect } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import Footer from "./Footer";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Marketplace from "./Pages/Marketplace";
import Avatar from "./Pages/Avatar";
import Spaces from "./Pages/Spaces";
import AvatarCreatorComponent from "./Pages/AvatarCreation";
import AvatarDisplay from "./Pages/AvatarDisplay";
import GetStarted from "./Pages/GetStarted";
import MainLayout from "./Layouts/MainLayout";
import NoNavbarLayout from "./Layouts/NoNavbarLayout";
import MintForm from "./Pages/MintForm";
import DisplayNFT from "./Pages/DisplayNFT";
import WebGLComponent from "./Pages/webglcomponent";

import { defaultProviders } from "@connect2ic/core/providers";
import { createClient } from "@connect2ic/core";
import { Connect2ICProvider } from "@connect2ic/react";
import ProfilePage from "./Pages/ProfilePage";

function LandingPage() {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing page with multiple sections */}
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path="/marketplace"
          element={
            <MainLayout>
              <Marketplace />
            </MainLayout>
          }
        />
        <Route
          path="/avatar"
          element={
            <MainLayout>
              <Avatar />
            </MainLayout>
          }
        />
        <Route
          path="/spaces"
          element={
            <MainLayout>
              <Spaces />
            </MainLayout>
          }
        />
        <Route
          path="/create_avatar"
          element={
            <NoNavbarLayout>
              <AvatarCreatorComponent />
            </NoNavbarLayout>
          }
        />
        <Route
          path="/avatar-display"
          element={
            <MainLayout>
              <AvatarDisplay />
            </MainLayout>
          }
        />
        <Route
          path="/getStarted"
          element={
            <MainLayout>
              <GetStarted />
            </MainLayout>
          }
        />
        <Route
          path="/mintNFT"
          element={
            <MainLayout>
              <MintForm />
            </MainLayout>
          }
        />
        <Route
          path="/display-nft"
          element={
            <MainLayout>
              <DisplayNFT />
            </MainLayout>
          }
        />
        <Route
          path="/zori-avatar"
          element={
            <NoNavbarLayout>
              <WebGLComponent />
            </NoNavbarLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

const client = createClient({
  canisters: {
    zori_backend,
  },
  providers: defaultProviders,
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);
