import UserProfileService from "../services/UserProfileService";
import {Route, Redirect} from "react-router-dom";
import {React, useState, useEffect} from "react";

const PrivateRoute = (props) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { component: Component, ...rest } = props;

  useEffect(() => {
    const fetchData = async () => {
      if(!localStorage.hasOwnProperty('pcn')){
        var user = await UserProfileService.whoAmI();
        console.log(user);
        if(user !== null && user !== undefined){
          localStorage.setItem('pcn', user.pcn);
        }
      }
        
      var isRegistered = localStorage.hasOwnProperty('pcn')

      if(!isRegistered && !loading){
        localStorage.clear();
      }

      setIsAuthenticated(isRegistered);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
      <Route
          {...rest}
          render={() =>
              isAuthenticated ? (
                <Component {...props} />
              ) : loading ? (
                  <div>LOADING...</div>
              ) : (
                <Redirect
                    to={{
                        pathname: "/profileSetup",
                        state: { from: props.location },
                    }}
                />
              )
          }
      />
  );
};

export default PrivateRoute;