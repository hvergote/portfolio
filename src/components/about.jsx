import Desktop from "./desktop";
import Window from "./window";

export default function About() {
    return (
        <>
        <Window title="About me" width={20} height={10} blueTitleBar={false}>
            
        </Window>
        <Desktop title="About me"/>
        </>
    )
}