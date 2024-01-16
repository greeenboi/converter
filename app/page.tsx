'use client'

import { Code, Film, VenetianMask } from "lucide-react"
import Navbar from "./Navbar"
import { Badge } from "@/components/ui/badge"
import Footer from "./Footer"



export default function Page() {
  return (
    <main className=" z-10 absolute flex flex-col text-black w-screen h-screen overflow-hidden ">
      <Navbar />
      <section className="flex flex-col overflow-y-scroll overflow-x-hidden">
        <section className=" my-12 md:my-36 lg::my-48 flex flex-col gap-2 items-center ">
          <Badge variant="outline" className="flex flex-row gap-6 p-2 border-gray-500 hover:cursor-pointer" onClick={()=>window.open('https://github.com/greeenboi/converter')}>
            <Badge variant='outline' className=" border-black">{`What's New? `}</Badge>
            {`See the latest updates on Videx`}
          </Badge>
          <h1 className=" font-Josefin font-medium text-8xl md:w-8/12 text-center text-[#0c23b3]">
              {`Convert your Files Server-less `}
          </h1>
          <h3 className=" my-4 font-normal text-xl text-gray-600 md:w-7/12 text-center ">Videx is made to let go of all the unnecessary hassle of cloud conversion. Do it quick, Do it <span>VIDEX</span></h3>
        </section>
        <section className="w-full px-8 md:px-28 my-12 md:my-24 gap-8 grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className=" md:col-span-2 p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
              <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff]" >Features</Badge>
              <h1 className=" font-Josefin font-medium text-4xl text-[#0c23b3]">Supercharge your Conversions</h1>
              <p className=" font-normal text-base text-gray-600">Our Platform streamlines the conversion of any Media Files. Say Goodbye to wasted time and hello to accelerated conversion cycles</p>
          </div>
          <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
              <div className="w-full flex flex-row">
                <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Code /></Badge>
              </div>
              <h1 className=" font-Josefin font-medium text-4xl text-[#0c23b3]">Fast and Efficient Conversion</h1>
              <p className=" font-normal text-base text-gray-600">Our Platform utilizes the power of WebAssembly and FFMPEG to provide fast and efficient media file conversion. No more waiting for hours to convert your Files. </p>
          </div>
          <div className="  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-11">
              <div className="w-full flex flex-row">
                <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><Film /></Badge>
              </div>
              <h1 className=" font-Josefin font-medium text-4xl text-[#0c23b3]">Supports Multiple Formats</h1>
              <p className=" font-normal text-base text-gray-600">{`Videx Supports a Wide Range of media file formats. Whether it's video, audio or image files, We've got you covered.`}</p>
          </div>
          <div className=" md:col-span-2  p-12 rounded-lg border-[#c4ccff] bg-white bg-opacity-15 nav border flex flex-col items-center gap-8">
              <div className="w-full flex flex-row">
                <Badge variant="outline" className="text-lg text-[#0c23b3] border-[#c4ccff] rounded-full p-4" ><VenetianMask /></Badge>
              </div>
              <h1 className=" font-Josefin font-medium text-4xl text-[#0c23b3]">Secure and Private</h1>
              <p className=" font-normal text-base text-gray-600">{`Your Files are converted on your device, ensuring that your data never leaves your device. We value your privacy and security`}</p>
          </div>
          
        </section>
        <Footer />
      </section>
    </main>
  )
}



