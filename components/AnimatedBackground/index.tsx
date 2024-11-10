"use client";

const AnimatedBackground = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="blur-blob blur-blob-1" />
      <div className="blur-blob blur-blob-2" />
      <div className="blur-blob blur-blob-3" />
      <div className="blur-blob blur-blob-4" />
    </div>
  );
};

export default AnimatedBackground;
