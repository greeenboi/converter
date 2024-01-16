import NoSSRWrapper from "../NoSSRWrapper";

export default function ConvertLayout({ children }: { children: React.ReactNode }) {
    return <NoSSRWrapper>{children}</NoSSRWrapper>
}