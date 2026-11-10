const variantes = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
};

// Botón reutilizable con variantes de estilo
function Button({ variant = 'primary', className = '', type = 'button', ...props }) {
  return <button type={type} className={`btn ${variantes[variant]} ${className}`} {...props} />;
}

export default Button;
