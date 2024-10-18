const WebGLComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        paddingBottom: "56.25%",
      }}
    >
      <iframe
        title="WebGL Game"
        src="/connectwebgl/index.html"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      />
    </div>
  );
};

export default WebGLComponent;
