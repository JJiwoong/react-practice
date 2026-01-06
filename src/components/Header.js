function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <h1>Movie App</h1>
      <button type="button" onClick={onToggleTheme}>
        {theme === "dark" ? "라이트모드" : "다크모드"}
      </button>
    </header>
  );
}
export default Header