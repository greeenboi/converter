import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Videx from '@/public/videx.svg'

export default function Page() {
  return (
    <main className="flex flex-row w-screen  items-center h-screen">
      <section className="md:w-1/3 z-20 flex flex-col items-center justify-center bg-white h-screen">
        <Image src={Videx} className='w-auto h-16 my-12' alt="logo" width={100} height={100} />
        <SignUp />
      </section>
    </main>
  );
}