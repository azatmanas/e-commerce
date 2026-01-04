const ModalWithForm = ({ title, subtitle, onSubmit, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {subtitle && <span>{subtitle}</span>}
      <form onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </section>
  );
};

export default ModalWithForm;
