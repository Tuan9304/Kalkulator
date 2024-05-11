import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Name</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/base-converter"}>Base Converter</Link>
    </nav>
  );
}
