import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import JobPosting from './pages/Post/JobPosting';
import React from "react";
import Auth from './layouts/Auth/Auth';
import PersonelInformation from './pages/Resume/PersonelInformation';
import ShareAnAd from './pages/Post/ShareAnAd';
import JobPostDetail from './pages/Post/JobPostDetail';
import EducationInformation from './pages/Resume/EducationInformation';
import SystemPersoonel from './layouts/SystemPersonnel';
import WorkExperience from './pages/Resume/WorkExperience';
import EmployerProfile from './pages/Employer/EmployerProfile';


function App(){

    return (
      <div className="App">
        <Switch>
        
          <Route path="/" exact component={Home}></Route>
          <Route path="/jobPostings" exact component={JobPosting}></Route>
          <Route path="/jobPost/:postId" exact component={JobPostDetail}/>
          <Route path="/auth" component={Auth} />
          <Route path="/resume/personelInformation" component={PersonelInformation} />
          <Route path="/resume/educationInformation" component={EducationInformation} />
          <Route path="/resume/workExperience" component={WorkExperience} />
          <Route path="/shareAnAd" component={ShareAnAd} />


          <Route path="/personnel" component={SystemPersoonel} />

          <Route path="/employer/profile/:employerId" component={EmployerProfile} />
         
        </Switch>
      </div>
    );
}

export default App;
