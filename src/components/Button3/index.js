function Button3(props) {
  return (
    <button
      onClick={props.onClick}
      className={`close ${props["data-value"]}`}
      data-value={props["data-value"]}
    >
      <a href="http://localhost:3000"> x </a>
    </button>
  );
}

export default Button3;
