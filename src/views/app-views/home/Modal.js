import React from "react";

const Modal = ({ open, onClose, carId }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer p-4">
        <iframe
          title="Opel Corsa 2020"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src={`https://sketchfab.com/models/${carId}/embed`}
          width="100%"
          height="500"
        >
          {" "}
        </iframe>
        <div
          onClick={onClose}
          className="modalRight right-4 border px-6 text-white cursor-pointer  py-2  border-white bg-red-600 justify-end absolute mr-4"
        >
          <p className="closeBtn font-bold">X</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
