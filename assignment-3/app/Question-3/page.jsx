import Link from "next/link";

const HomeAbout = () => {
  return (
    <>
      <div>
        <h1>This is question 3</h1>
        <div className="link">
          <Link href={"Question-3/Home"}>
            <button>Home</button>
          </Link>
          <br/>
          <Link href={"/Question-3/About"}>
            <button>About</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;