import Navbar from "../Navbar";
import NoSSRWrapper from "../NoSSRWrapper";

export default function ConvertLayout({ children }: { children: React.ReactNode }) {
    return(
        <NoSSRWrapper>
            <Navbar />
            {children}
        </NoSSRWrapper>
    ) 
}