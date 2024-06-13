import React, { useEffect } from "react";

function ErrorPage() {
  useEffect(() => {
    document.title = "403  - Forbidden: Access is denied";
  });
  return (
    <div className="error__header">
      <div></div>
    </div>
  );
}

export default ErrorPage;
