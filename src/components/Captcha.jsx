import { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
function Captcha() {
  useEffect(() => {
    loadCaptchaEnginge(6);
  });
  return (
    <div>
      <LoadCanvasTemplateNoReload />{" "}
    </div>
  );
}

export default Captcha;
