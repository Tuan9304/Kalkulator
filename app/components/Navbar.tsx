import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Kalkulator</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/base-converter"}>Base Converter</Link>
      <Link href={"/text-encryption/caesar-cipher"}>Caesar Cipher</Link>
      <Link href={"/text-encryption/vigenere-cipher"}>Vigenère Cipher</Link>
    </nav>
  );
}
