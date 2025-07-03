const WithAuth = (WrappedComponent) =>{

  return function Authentication(props){
      const {isLoggedIn} = props; 
      if(isLoggedIn){
          return <WrappedComponent {...props}/>
      }
      return (
          <div>
              <h2>Please LogIn first</h2>
          </div>
      );
  }
}

const Profile = () =>{
  return (
      <div>
          <h2>Profile Page</h2>
      </div>
  );
}

const Result = WithAuth(Profile);
export default Result;