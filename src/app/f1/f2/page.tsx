import Link from "next/link";

export default function F2() {
  return (
    <div>
      <h1>F2 Page</h1>
      <Link href={"/f4"}>Go to F4 Page</Link>
    </div>
  );
}