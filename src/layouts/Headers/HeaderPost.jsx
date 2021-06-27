import { Link } from "react-router-dom";
import CardAll from "../SystemPersonnel/Post/CardAll";
import CardActive from "../SystemPersonnel/Post/CardActive";
import CardExpired from "../SystemPersonnel/Post/CardExpired";
import CardPassive from "../SystemPersonnel/Post/CardPassive";
import CardRejected from "../SystemPersonnel/Post/CardRejected";
import CardWaitingApproval from "../SystemPersonnel/Post/CardWaitingApproval";

export default function HeaderPost() {


  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/all">
                  <CardAll/>
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/waitingApproval">
                  <CardWaitingApproval />
                </Link>
              </div>
              <div className="w-full  lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/active">
                  <CardActive/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/passive">
                  <CardPassive/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/expired">
                  <CardExpired/>
                </Link>
              </div>
              <div className="w-full mt-3 lg:w-6/12 xl:w-4/12 px-4">
                <Link to="/personnel/posts/rejected">
                  <CardRejected/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
