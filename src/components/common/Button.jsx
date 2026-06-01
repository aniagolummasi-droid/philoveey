function Button({ className = '', variant = 'primary', ...props }) {
  return <button className={`button ${variant} ${className}`.trim()} {...props} />
}

export default Button
