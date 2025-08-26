import Link from "next/link";

export default function F1() {
  return (
    <div>
        <h1>F1 Page</h1>
        <div>
            <Link href={"/f1/f2"}>Go to F2 Page</Link>
            <Link href={"/f3"}>Go to F3 Page</Link>
        </div>
    </div>
  );
}