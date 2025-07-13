import Link from "next/link";

const HomeAbout = () => {
  return (
    <>
      <p className="question">
        Q4. Enhance the previous application by adding protected pages that
        require authentication. Create a login page with a form that accepts a
        username and password. Implement authentication logic (e.g., hardcode a
        username and password for now). Secure the About page so that it can
        only be accessed by authenticated users. Redirect unauthenticated users
        to the login page. Display a message on the Home page welcoming the
        authenticated user.
      </p>
      <div>
        <Link href={"/Question-4/Login"}>
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default HomeAbout;