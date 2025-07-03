// Create a functional component named StudentList that displays a list of student names. Define an array of 
// student names as a constant within the component. Use the useMemo hook to memoize the list of student names.

import StudentList from "@/app/components/StudentList";

const Home = () => {
  return (
    <div>
      <StudentList />
    </div>
  );
}

export default Home;
