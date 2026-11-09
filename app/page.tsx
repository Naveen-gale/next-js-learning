import Image from "next/image";
import Card from "@/Components/Card";
import Link from "next/link";

export default function Home() {
  return (
   <div>
     <h1>Welcome to the Home Page</h1>
    <Card description="hi this description " title = " hi this is title "/>
     <Link href="/about" style={{ color: "blue", textDecoration: "underline" }}>
          Go to About Page
        </Link>
   </div>

  );
}
