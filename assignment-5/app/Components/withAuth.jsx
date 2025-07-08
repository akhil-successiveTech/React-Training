"use client"
import { useAuth } from "../Context/AuthContext";
const WithAuth = (WrappedComponent) =>{

  return function Authentication(props){
      const {user} = useAuth(); 
      if(user){
          return <WrappedComponent {...props}/>
      }
      return (
          <div>
              <h2>Please LogIn first</h2>
          </div>
      );
  }
}
export default WithAuth;

// const Profile = () =>{
//   return (
//       <div>
//           <h2>Profile Page</h2>
//       </div>
//   );
// }

// const Result = WithAuth(Profile);
// export default Result;