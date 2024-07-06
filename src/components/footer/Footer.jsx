function Footer() {
  return (
    <footer className="footer">
      Copyright 2024 . VFS Global. All Rights Reserved{" "}
      <button
        style={{ marginLeft: "2rem", color: "inherit", border: "none" }}
        onClick={() =>
          sessionStorage.getItem("staticDate") === "21/06/2024"
            ? sessionStorage.setItem("staticDate", "24/06/2024")
            : sessionStorage.setItem("staticDate", "21/06/2024")
        }
      >
        {" "}
      </button>
    </footer>
  );
}

export default Footer;
