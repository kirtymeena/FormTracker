function SubHeader() {
  return (
    <div className="subHeader__wrapper">
      <div
        style={{
          width: "9.2rem",
          marginRight: "5px",
          fontSize: "12px",
          textAlign: "left",
        }}
      >
        <b>Mandatory</b>
        <span style={{ color: "red" }}>*</span>
      </div>
      <div style={{ float: "right", marginRight: "5px", fontSize: "12px" }}>
        <select className="dropdown" style={{ height: "35px" }}>
          <option>Select Language</option>
          <option selected>English</option>
        </select>
      </div>
    </div>
  );
}

export default SubHeader;
