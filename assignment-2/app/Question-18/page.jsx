// Design a custom hook named useLocalStorage to interact with local storage. Create a useLocalStorage 
// hook that allows storing and retrieving data from local storage. Implement methods for setting, getting, and 
// removing data using the hook.

import ManageLocalStorage from "../components/LocalStorage";

export default function Home() {
  return (
    <div>
      <ManageLocalStorage/>
    </div>
  );
}
