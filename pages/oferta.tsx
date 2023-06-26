import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>

      <Link href="/szkolenia">
      	<button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
      		... szkolenia
      	</button>
    	</Link>

    	<Link href="/lanchpad">
    	  <button className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">
    	    Lanchpad
    	  </button>
    	</Link>

      <Footer />
    </>
  );
}










