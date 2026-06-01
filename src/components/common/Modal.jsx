function Modal({ children, isOpen, onClose, title }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        {title ? <h2>{title}</h2> : null}
        {children}
      </section>
    </div>
  )
}

export default Modal
