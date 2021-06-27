import { Route, Switch} from 'react-router';
import Sidebar from './Sidebar/Sidebar'
import PostPendingApproval 
from '../pages/SystemPersonnel/Post/PostPendingApproval';
import PostPassive from '../pages/SystemPersonnel/Post/PostPassive';
import PostExpired from '../pages/SystemPersonnel/Post/PostExpired';
import PostRejected from '../pages/SystemPersonnel/Post/PostRejected';
import PostActive from '../pages/SystemPersonnel/Post/PostActive';
import AllPost from '../pages/SystemPersonnel/Post/AllPost';

import EmployerPendingApproval from '../pages/SystemPersonnel/User/EmployerPendingApproval'
import EmployerActive from '../pages/SystemPersonnel/User/EmployerActive'
import EmployerPassive from '../pages/SystemPersonnel/User/EmployerPassive'
import EmployerRejected from '../pages/SystemPersonnel/User/EmployerRejected'
import JobSeekerList from '../pages/SystemPersonnel/User/JobSeekerList'
import PostDetail from '../pages/SystemPersonnel/Post/PostDetail';
import UserDetail from '../pages/SystemPersonnel/User/UserDetail';
import EmployerUpdate from '../pages/SystemPersonnel/User/EmployerUpdate';
import CardSettings from '../pages/SystemPersonnel/Card/CardSettings';
export default function SystemPersoonel() {
    return (
        <div>
            <Sidebar/>
                    <Switch>
                        <Route path="/personnel/posts/all" exact component={AllPost} />
                        <Route path="/personnel/posts/waitingApproval" exact component={PostPendingApproval} />
                        <Route path="/personnel/posts/active" exact component={PostActive} />
                        <Route path="/personnel/posts/passive" exact component={PostPassive} />
                        <Route path="/personnel/posts/expired" exact component={PostExpired} />
                        <Route path="/personnel/posts/rejected" exact component={PostRejected} />

                        <Route path="/personnel/userOperation/employers/waitingApproval" exact component={EmployerPendingApproval} />
                        <Route path="/personnel/userOperation/employers/active" exact component={EmployerActive} />
                        <Route path="/personnel/userOperation/employers/passive" exact component={EmployerPassive} />
                        <Route path="/personnel/userOperation/employers/rejected" exact component={EmployerRejected} />
                        <Route path="/personnel/userOperation/employers/update" exact component={EmployerUpdate} />
                        <Route path="/personnel/userOperation/jobSeekers" exact component={JobSeekerList} />

                        <Route path="/personnel/post/:postId" exact component={PostDetail} />
                        <Route path="/personnel/userOperation/user/:userId" exact component={UserDetail} />
                        <Route path="/personnel/settings/:personnelId" exact component={CardSettings} />
                    </Switch>
        </div>
    )
}
