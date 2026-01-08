import styled from "./Header.module.css";

function Header({ theme, onToggleTheme }) {
  return (
    <header className={`${styled["site-header"]} ${theme === "dark" ? styled["is-dark"] : styled["is-light"]}`}>
      <div className={styled["site-header_container"]}>
        <h1>Movie App</h1>
        <button
          type="button"
           className={`${styled.themeToggle} ${theme === "dark" ? styled["is-dark"] : styled["is-light"]}`}
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
          aria-pressed={theme === "dark"}
        >
          <span className={styled.themeToggle__track} aria-hidden="true">
            <span className={styled.themeToggle__thumb} />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header