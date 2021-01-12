import ProfileSetup from "./profileSetup";
import UserProfileService from "../services/UserProfileService";
import {Route} from "react-router-dom";

export default function PrivateRoute({component: Component, ...rest}){
    // UserProfileService.existsByPcn(410078);//nynke
    // UserProfileService.existsByPcn(123456);//non existent
    // UserProfileService.existsByPcn(439772);//youri
    UserProfileService.existsByPcn(438161);//pim
    
    const isRegistered = localStorage.hasOwnProperty('pcn')

    
    return(
      <Route
          {...rest}
          render={(props) =>
           isRegistered ? <Component {...props} /> : <Component {...props} />
          }
      />
    );
  }