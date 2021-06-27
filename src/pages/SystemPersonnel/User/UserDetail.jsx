import React, { useEffect, useState} from "react";
import { useParams } from "react-router";
import UserService from "../../../services/User/userService";

export default function UserDetail() {
    let {userId} = useParams();

    const [user, setUser] = useState({});

    useEffect(()=> {
      let userService = new UserService();
      userService.getById(userId).then(result => setUser(result.data.data))
    },[])

  return (
    <>
        
    </>
  );
}
