import React from "react";

// styles
import "./ConfirmModal.css";

const ConfirmModal = ({
  isModalOpen,
  setIsModalOpen,
  handleDelete,
  question,
  yes,
  no,
}) => {
  if (isModalOpen) {
    document.body.classList.add("modal-open");
  }

  if (!isModalOpen) {
    document.body.classList.remove("modal-open");
  }

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={isModalOpen === true ? "modal open" : "modal"}>
      <div className="modal-content">
        <p>{question}</p>
        <div className="modal-button-line">
          {yes && (
            <button onClick={handleDelete} className="btn delete">
              {yes}
            </button>
          )}
          {no && (
            <button onClick={handleClose} className="btn agree">
              {no}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
