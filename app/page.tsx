
import Link from "next/link";
import AddToCart from "./Components/AddToCart";


export default function Home() {
  return (
    <main>
      hello world <br />
      <Link href="users">users list</Link>
      <br />
      <h1>this is daisy ui card</h1>
      <div className="flex gap-x-4">
        <AddToCart />
        <AddToCart />
       
      </div>
      <br />
      {/* <h1>this is chakra ui card</h1>
      <AddToCartChakraUi/> */}
    </main>
  );
}
