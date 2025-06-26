import "../styles/Modal.css";

export default function Modal({ isOpen, closeModal, text }) {
  if (!isOpen) return null; // Don't render anything if modal isn't open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
