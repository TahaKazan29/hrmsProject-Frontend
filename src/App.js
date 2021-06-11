import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import JobPosting from './pages/JobPosting';
import JobPostDetail from './pages/JobPostDetail';
import React from "react";
import Auth from './layouts/Auth/Auth';
import Resume from './pages/Resume';
import ResumeExperiences from './pages/ResumeExperiences';
import ShareAnAd from './pages/ShareAnAd';


function App(){

    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/jobPostings" exact component={JobPosting}></Route>
          <Route path="/jobPost/:postId" exact component={JobPostDetail}/>
        <Route path="/auth" component={Auth} />
        <Route path="/cv" component={Resume} />
        <Route path="/resumeExperiences" component={ResumeExperiences} />
        <Route path="/shareAnAd" component={ShareAnAd} />
        </Switch>
      </div>
    );
}

export default App;
