import * as zori_backend from "declarations/zori_backend";
import React, { useEffect } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import Features from "./Features";
import Footer from "./Footer";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Marketplace from "./Pages/Marketplace";
import Avatar from "./Pages/Avatar";
import Spaces from "./Pages/Spaces";
import AvatarCreatorComponent from "./Pages/AvatarCreation";
import AvatarDisplay from "./Pages/AvatarDisplay";
import JoinWaitlist from "./Pages/GetStarted";
import MainLayout from "./Layouts/MainLayout";
import NoNavbarLayout from "./Layouts/NoNavbarLayout";
import MintForm from "./Pages/MintForm";
import DisplayNFT from "./Pages/DisplayNFT";
import WebGLComponent from "./Pages/webglcomponent";
import CustomCursor from "./CustomCursor";
import ViewAllNFTs from "./Pages/ViewAllNFTs";
import Login from "./Pages/Login";
import ViewNFT from "./Pages/viewNFT";
import MyCollection from "./Pages/MyCollection";

import zubi1 from "../public/images/nfts/zubi.jpeg";
import zubi2 from "../public/images/nfts/zubi_2.jpg";
import zubi3 from "../public/images/nfts/zubi_3.jpeg";

import plot1 from "../public/images/nfts/Blue Plot.jpg";
import plot2 from "../public/images/nfts/Pink Plot.jpg";
import plot3 from "../public/images/nfts/Yellow Plot.jpg";

import wearable1 from "../public/images/nfts/wearable1.jpg";
import wearable2 from "../public/images/nfts/wearable2.jpg";
import wearable3 from "../public/images/nfts/wearable3.jpg";

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
      <Features />
      <FifthPage />
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

  const categories = {
    Avatars: [
      {
        id: 1,
        imageUrl: zubi1,
        title: "Avatar 1",
        price: "2",
        currency: "ICP",
      },
      {
        id: 2,
        imageUrl: zubi2,
        title: "Avatar 2",
        price: "3",
        currency: "ICP",
      },
      {
        id: 3,
        imageUrl: zubi3,
        title: "Avatar 3",
        price: "2.5",
        currency: "ICP",
      },
    ],
    Land: [
      { id: 1, imageUrl: plot1, title: "Land 1", price: "5", currency: "ICP" },
      { id: 2, imageUrl: plot2, title: "Land 2", price: "8", currency: "ICP" },
      { id: 3, imageUrl: plot3, title: "Land 3", price: "5", currency: "ICP" },
    ],
    Wearables: [
      {
        id: 1,
        imageUrl: wearable1,
        title: "Wearable 1",
        price: "1",
        currency: "ICP",
      },
      {
        id: 2,
        imageUrl: wearable2,
        title: "Wearable 2",
        price: "1.5",
        currency: "ICP",
      },
      {
        id: 3,
        imageUrl: wearable3,
        title: "Wearable 3",
        price: "1",
        currency: "ICP",
      },
    ],
  };

  return (
    <>
      <CustomCursor />
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
                <Marketplace categories={categories} />
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
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
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
          <Route
            path="/my-collection"
            element={
              <MainLayout>
                <MyCollection />
              </MainLayout>
            }
          />
          <Route
            path="/category/:category"
            element={
              <MainLayout>
                <ViewAllNFTs categories={categories} />
              </MainLayout>
            }
          />
          <Route
            path="/category/:category/:nftId"
            element={
              <MainLayout>
                <ViewNFT categories={categories} />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
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
