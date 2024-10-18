import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2} />;
}

function CaptureWrapper({ onCapture }) {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    onCapture({ gl, scene, camera });
  }, [gl, scene, camera, onCapture]);

  return null;
}

export default function AvatarDisplay() {
  const avatarUrl = localStorage.getItem("userAvatar");
  const downloadRef = useRef();
  const logoRef = useRef(new Image());
  const captureDataRef = useRef(null);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        const img = new Image();
        img.src = "src/assets/zori-logo.png";
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        logoRef.current = img;
        console.log("Logo loaded successfully.");
      } catch (error) {
        console.error("Failed to load the logo.");
      }
    };
    loadLogo();
  }, []);

  const handleCapture = ({ gl, scene, camera }) => {
    captureDataRef.current = { gl, scene, camera };
  };

  const captureImage = () => {
    if (!captureDataRef.current) {
      console.error("Capture data is not available.");
      return;
    }

    const { gl, scene, camera } = captureDataRef.current;
    gl.render(scene, camera);
    const canvas = gl.domElement;
    const dataURL = canvas.toDataURL("image/png");

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height;
    const context = finalCanvas.getContext("2d");

    const avatarImage = new Image();
    avatarImage.src = dataURL;
    avatarImage.onload = () => {
      // Draw the logo in the center and make it large
      const logoAspectRatio = logoRef.current.width / logoRef.current.height;
      let logoWidth = finalCanvas.width * 0.8;
      let logoHeight = logoWidth / logoAspectRatio;

      // If the calculated height is too large, adjust the dimensions
      if (logoHeight > finalCanvas.height * 0.8) {
        logoHeight = finalCanvas.height * 0.8;
        logoWidth = logoHeight * logoAspectRatio;
      }
      const logoX = (finalCanvas.width - logoWidth) / 2;
      const logoY = (finalCanvas.height - logoHeight) / 2;
      context.globalAlpha = 0.5;
      context.drawImage(logoRef.current, logoX, logoY, logoWidth, logoHeight);

      // Draw the avatar image on top of the logo
      context.globalAlpha = 1.0;
      context.drawImage(avatarImage, 0, 0);

      const finalURL = finalCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = finalURL;
      link.download = "avatar_with_logo.png";
      link.click();
    };

    avatarImage.onerror = () => {
      console.error("Failed to create avatar image.");
    };
  };

  return (
    <div className="mt-28" style={{ height: "1000px" }}>
      {avatarUrl ? (
        <div className="avatar-display">
          <h2>Your 3D Avatar:</h2>
          <Canvas
            style={{ height: "500px", width: "600px" }}
            camera={{ position: [0, 3, 10], fov: 30 }}
          >
            <CaptureWrapper onCapture={handleCapture} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1.5} position={[0, 1, 2]} />
            <Suspense fallback={null}>
              <AvatarModel url={avatarUrl} />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              zoomSpeed={1}
              minDistance={1}
              maxDistance={10}
              target={[0, 2, 0]}
              enableDamping={true}
              dampingFactor={0.5}
            />
          </Canvas>

          <button onClick={captureImage} ref={downloadRef}>
            Download Image
          </button>
        </div>
      ) : (
        <p>No avatar found. Please create one first.</p>
      )}
    </div>
  );
}
