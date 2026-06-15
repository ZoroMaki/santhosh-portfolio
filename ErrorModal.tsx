interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

export function ErrorModal({ message, onClose }: ErrorModalProps) {
  return (
    <div className="ui-modal-overlay">
      <div className="ui-modal">
        <button className="ui-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="ui-modal-body">{message}</div>
        <div className="ui-modal-footer">
          <button className="ui-btn ui-btn-primary" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
