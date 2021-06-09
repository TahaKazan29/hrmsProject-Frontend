import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import JobPosting from './pages/JobPosting';
import JobPostDetail from './pages/JobPostDetail';
import React, { Component} from "react";
import JobPostService from "./services/jobPostService"
import Auth from './layouts/Auth/Auth';
import Resume from './pages/Resume';
import ResumeExperiences from './pages/ResumeExperiences';

let postService = new JobPostService();
export default class App extends Component{
  state = {
    posts:[],
    currentPost:{}
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts(){
    postService.getPosts().then((result) => this.setState({posts:result.data.data}));
  }

  changePost = (post) => {
    this.setState({currentPost:post})
  }


  render(){
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/jobPostings" exact render={props => (
            <JobPosting {...props} posts={this.state.posts} changePost={this.changePost}></JobPosting>
          )}></Route>
          <Route path="/jobPost/:postId" exact render={props => (
            <JobPostDetail {...props} currentPost={this.state.currentPost}></JobPostDetail>
          )}/>
        <Route path="/auth" component={Auth} />
        <Route path="/cv" component={Resume} />
        <Route path="/resumeExperiences" component={ResumeExperiences} />
        </Switch>
      </div>
    );
  }
}

//export default App;
