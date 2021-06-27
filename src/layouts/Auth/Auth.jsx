import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import EmployerForRegister from "../../pages/Auth/EmployerForRegister";
import JobSeekerForRegister from "../../pages/Auth/JobSeekerForRegister";
import FooterSmall from "../Footers/FooterSmall";
import Navbar from "../Navbars/IndexNavbar"


export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(https://dvkconsultants.ae/wp-content/uploads/2018/02/DIGITAL-HUMAN-RESOURCE-MANAGEMENT.jpg)",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/employerForRegister" exact component={EmployerForRegister} />
            <Route path="/auth/jobSeekerForRegister" exact component={JobSeekerForRegister} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
