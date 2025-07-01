import axios from "axios";
import UsersClient from "./UsersClient";

export default async function UsersPage() {
  let users = null;

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = res.data;
  } catch (error) {
    console.error("SSR Fetch Error:", error.message);
    users = null; // fail gracefully
  }

  return <UsersClient initialUsers={users} />;
}
