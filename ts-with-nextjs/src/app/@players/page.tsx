import Link from "next/link";

const Players = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is Loading");
    }, 3000)
  );
  return (
    <div className="p-56 border rounded-xl text-3xl font-bold">
      <h1>Players</h1>
      <Link href="/salaries">Check Salary</Link>
    </div>
  );
};

export default Players;
