import Link from "next/link";
 export default function Navbar(){

    return(




        <div className="bg-teal-400">
            <ul class="flex border-b ">
  <li class="-mb-px mr-1">
    <Link class=" inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/">Home</Link>
  </li>
  <li class="mr-1">
    <Link class=" inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="../blog">All Post</Link>
  </li>
  
</ul>
        </div>
    )
 }