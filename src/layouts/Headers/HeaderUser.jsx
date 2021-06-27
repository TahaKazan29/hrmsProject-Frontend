import { Link } from "react-router-dom";
import CardJobSeeker from "../SystemPersonnel/User/CardJobSeeker";
import CardEmployerActive from "../SystemPersonnel/User/CardEmployerActive";
import CardEmployerPassive from "../SystemPersonnel/User/CardEmployerPassive";
import CardEmployerRejected from "../SystemPersonnel/User/CardEmployerRejected";
import CardEmployerPendingApproval from "../SystemPersonnel/User/CardEmployerPendingApproval";
import CardEmployerUpdate from "../SystemPersonnel/User/CardEmployerUpdate";

export default function HeaderUser() {
  
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/employers/waitingApproval">
                  <CardEmployerPendingApproval/>
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/employers/update">
                  <CardEmployerUpdate/>
                </Link>
              </div>
              <div className="w-full  lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/employers/rejected">
                  <CardEmployerRejected/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/employers/passive">
                  <CardEmployerPassive/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/employers/active">
                  <CardEmployerActive/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/userOperation/jobSeekers">
                  <CardJobSeeker/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
