import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import SubHeader from "../subHeader/SubHeader";
import refresh from "../../assets/refresh.png";
import { v4 as uuidv4 } from "uuid";
import captcha from "../../assets/captcha.png";
// import captchaNoTick from "../../assets/captcha/captchaNoTick.png";
import captchaNoTick from "../../assets/captcha/withoutTick.png";
import captchaGif from "../../assets/captcha/captchaGif.gif";
import withTick from "../../assets/captcha/withTick.png";
import nonTick from "../../assets/captcha/nonTick.png";
import tick from "../../assets/captcha/tick.png";
// import Captcha from "../Captcha";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
function FormComp() {
  const [displayDate, setDisplayDate] = useState();
  const [reset, setReset] = useState(false);
  const [refreshCaptcha, setRefreshCaptcha] = useState(false);
  const [changeCaptcha, setChangeCatpcha] = useState(0);
  // const navigate = useNavigate();
  // const [defaultDate, setDefaultDate] = useState(day/month/year);
  const [validationMsg, setValidationMsg] = useState({
    referenceNumber: "",
    lastName: "",
    user_captcha_input: "",
  });
  const [formData, setFormData] = useState({
    referenceNumber: "",
    lastName: "",
    user_captcha_input: "",
  });
  const handleFormData = (e) => {
    setFormData((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const validateFields = () => {
    if (
      (formData.lastName === "" || formData.lastName.length === 0) &&
      (formData.referenceNumber === "" || formData.referenceNumber.length === 0)
    ) {
      setValidationMsg({
        lastName: "Required",
        referenceNumber: "Required",
      });
      return true;
    }
    if (
      formData.referenceNumber === "" ||
      formData.referenceNumber.length === 0
    ) {
      setValidationMsg({ referenceNumber: "Required" });

      return true;
    }
    if (formData.lastName === "" || formData.lastName.length === 0) {
      setValidationMsg({ lastName: "Required" });

      return true;
    }
    // let user_captcha = document.getElementById("user_captcha_input").value;
    // if (validateCaptcha(user_captcha) === true) {
    //   loadCaptchaEnginge(5);
    //   document.getElementById("user_captcha_input").value = "";
    // } else {
    //   alert("Captcha Does Not Match");
    //   document.getElementById("user_captcha_input").value = "";
    //   return true;
    // }
    setValidationMsg({ referenceNumber: "", lastName: "" });

    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields() === false) {
      const refNum = formData.referenceNumber;
      // const date = refNum.split("");
      // const convertToDate = date.slice(4, 10).join("");
      const date = refNum.split("/")[1];
      const midDate = date.slice(0, 6);
      const convertToDate = date.slice(0, 6);

      const strDate = convertToDate.split("");
      const day = strDate.slice(0, 2).join("");
      const month = strDate.slice(2, 4).join("");
      const year = strDate.slice(4).join("");
      const d = `20${year}-${month}-${day}`;
      const addedDay = 60 * 60 * 24 * 1000;
      const dd = new Date(d);
      const endDate = new Date(dd.getTime() + addedDay);

      formatDate(endDate);
      // navigate(
      //   `/Global-Passporttracking/track/index?${uuidv4()}${uuidv4()}${uuidv4()}`
      // );
      // location.replace(
      //   `/Global-Passporttracking/track/index?${uuidv4()}${uuidv4()}${uuidv4()}`
      // );

      window.history.pushState(
        null,
        "",
        `/Global-Passporttracking/track/index?${uuidv4()}${uuidv4()}${uuidv4()}`
      );
    }
  };
  useEffect(() => {
    console.log(window.location);
  });

  const formatDate = (date) => {
    const dateStr = new Date(date).toISOString().split("T")[0];
    const dateArr = dateStr.split("-");
    const day = dateArr[2];
    const month = dateArr[1];
    const year = dateArr[0];
    setDisplayDate(day + "/" + month + "/" + year);
  };

  const formReset = () => {
    setReset(true);

    if (confirm("Are you sure you want to refresh values entered?")) {
      setFormData({
        referenceNumber: "",
        lastName: "",
        user_captcha_input: "",
      });
      setValidationMsg({
        referenceNumber: null,
        lastName: null,
        user_captcha_input: null,
      });
    }
  };

  useEffect(() => {}, [validationMsg]);

  useEffect(() => {
    if (sessionStorage.getItem("staticDate") === null) {
      sessionStorage.setItem("staticDate", "21/06/2024");
    }
  });
  useEffect(() => {
    if (changeCaptcha !== 0) {
      setTimeout(() => {
        setChangeCatpcha(2);
      }, 1600);
    }
  });
  return (
    <div className="form__layout">
      <SubHeader />
      <div className="mid__area">
        <h2 className="form__title">TRACK YOUR APPLICATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <div className="inner__group">
              <Form.Label className="form__label" htmlFor="referenceNumber">
                <b>
                  Reference Number<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                onChange={handleFormData}
                placeholder="Reference Number"
                type="text"
                name="referenceNumber"
                value={formData.referenceNumber}
                id="referenceNumber"
              />
            </div>
            {validationMsg.referenceNumber?.length > 0 && (
              <div className="error__msg">
                <div>{validationMsg.referenceNumber}</div>
              </div>
            )}
          </div>
          <div className="form__group">
            <div className="inner__group">
              <Form.Label className="form__label" htmlFor="lastName">
                <b>
                  Last Name<span style={{ color: "red" }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                value={formData.lastName}
                onChange={handleFormData}
                placeholder="Last Name"
                type="text"
                id="lastName"
                name="lastName"
              />
            </div>
            {validationMsg.lastName?.length > 0 && (
              <div className="error__msg">
                <div>{validationMsg.lastName}</div>
              </div>
            )}
          </div>
          <div className="form__group" style={{ marginLeft: "-19px" }}>
            {/* <Captcha /> */}
            {/* <div
              style={{
                height: "4rem",
                display: "flex",
                alignItems: "center",
                width: "20rem",
              }}
            >
              <LoadCanvasTemplateNoReload />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "23rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span>
                  <img
                    src={refresh}
                    className="refresh"
                    onClick={() => setRefreshCaptcha(true)}
                  />
                </span>

                <Form.Label
                  className="form__label-captcha"
                  htmlFor="user_captcha_input"
                >
                  <b>
                    <span>Enter the text shown in image</span>
                  </b>
                </Form.Label> */}
            {/* </div> */}

            {/* <Form.Control
                style={{ width: "13rem !important" }}
                value={formData.user_captcha_input}
                onChange={handleFormData}
                placeholder=""
                type="text"
                id="user_captcha_input"
                name="user_captcha_input" */}
            {/* /> */}

            {/* -------------------------------------------------------------- */}
            {/* <img
              src={captcha}
              alt="captcha"
              style={{ width: "21rem", objectFit: "cover" }}
            /> */}
            {changeCaptcha === 0 ? (
              <img
                src={nonTick}
                alt="captcha"
                style={{ width: "21rem", objectFit: "cover" }}
                onClick={() => setChangeCatpcha(1)}
              />
            ) : changeCaptcha === 1 ? (
              <img
                src={captchaGif}
                alt="captcha"
                style={{ width: "21rem", objectFit: "cover" }}
              />
            ) : (
              <img
                src={tick}
                alt="captcha"
                style={{ width: "21rem", objectFit: "cover" }}
              />
            )}
            {/* ------------------------------------------------------------- */}

            {/* {validationMsg.user_captcha_input?.length > 0 && (
              <div className="error__msg">
                <div>{validationMsg.user_captcha_input}</div>
              </div>
            )} */}
          </div>
          <div className="btn__wrapper">
            <button type="submit">Submit</button>
            <button onClick={formReset}>Reset</button>
          </div>
        </form>
        {/* {displayDate && (
          <div className="result__wrapper">
            The Application has been recevied at the Consulate General of Poland
            in Mumbai on {displayDate}
          </div>
        )} */}
        {displayDate && (
          <div className="result__wrapper">
            The Application has been recevied at the Consulate General of Poland
            in Mumbai on {sessionStorage.getItem("staticDate")}
          </div>
        )}
      </div>
      <div className="note">
        <b>Important Note:</b> Site Supports IE 9 and above, Mozilla, Google
        Chrome, Safari and Opera.
      </div>
    </div>
  );
}

export default FormComp;
