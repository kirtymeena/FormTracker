import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
import FormComp from "./components/form/FormComp";
import Header from "./components/header/Header";
import SubHeader from "./components/subHeader/SubHeader";
import { HashRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
function App() {
  const Layout = () => {
    return (
      <div className="layout">
        <Header />
        <Outlet />
        <div
          style={{ width: "985px", margin: "0 auto", paddingBottom: "0.1rem" }}
        >
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <div>
      <HashRouter>
        {" "}
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              path="/Global-Passporttracking/:name?/:id?"
              element={<FormComp />}
            />
          </Route>
          <Route path="/" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
