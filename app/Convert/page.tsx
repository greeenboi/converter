'use client'
import { Badge } from "@/components/ui/badge";
import { Cpu, Film, VenetianMask } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page(){
    const { isLoaded, isSignedIn, user } = useUser();
    return(
        <main className="z-10 absolute text-black flex flex-col items-center justify-center w-screen h-min gap-2 overflow-hidden">
            <section className=" w-full mt-12 md:mt-16 lg:mt-24 md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-14 h-[650px] overflow-y-scroll overflow-x-hidden scrollmod">
                <div className=" md:col-span-2 lg:col-span-3  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Cpu /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">Our Services for {user?.firstName ?? 'Guest'}</h1>
                    <p className=" font-normal text-base text-gray-600">{`Your Files are converted on your device, ensuring that your data never leaves your device. We value your privacy and security`}</p>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .GIF</h1>
                    <Link href='/Convert/Mp4-to-Gif'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .MP3</h1>
                    <Link href='/Convert/Mp4-to-Mp3'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .MOV</h1>
                    <Link href='/Convert/Mp4-to-Mov'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .M4A</h1>
                    <Link href='/Convert/Mp4-to-M4A'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .WAV</h1>
                    <Link href='/Convert/Mp4-to-WAV'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
                    <div className="w-full flex flex-row">
                        <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
                    </div>
                    <h1 className="font-Josefin font-medium text-4xl text-[#0c23b3]">.MP4 to .AVI</h1>
                    <Link href='/Convert/Mp4-to-AVI'><Button variant='secondary' className=' px-8 py-6 bg-[#0c23b3] hover:bg-[#21295e] text-white' >Convert</Button></Link>
                </div>
                
                

            </section>
        </main>
    )
}