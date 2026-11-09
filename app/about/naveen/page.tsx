type User = {
  id: number;
  name: string;
  username: string;
};
import FilterData from "@/Components/FilterData";

export default async function Naveen() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();

  return (
    <div>
      <h1>this naveen</h1>
      <FilterData users={users} />
    </div>
  );
}