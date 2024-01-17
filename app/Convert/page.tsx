import Link from "next/link";
import Navbar from "@/app/Navbar";

export default function Page(){
    return(
        <div className="z-20 absolute text-black flex flex-col gap-2">
            <Navbar />
            Convert page
            <Link href='/Convert/Mp4-to-Gif'>MP4 to Gif</Link>
            <Link href='/Convert/Mp4-to-Mp3'>MP4 to MP3</Link>
        </div>
    )
}