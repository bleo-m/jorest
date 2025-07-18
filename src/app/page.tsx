import Clock from "./components/Clock";
import Glass from "./components/Glass";
import ShinyText from "./components/ShinyText";
import Weather from "./components/Weather";

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col justify-between items-center relative p-8">
            <div className="h-1/3 flex justify-between items-start w-full">
                <Glass>
                    <Weather />
                </Glass>
                <Glass>
                    <Clock />
                </Glass>
            </div>
            <ShinyText
                text="That outfit is a choice for sure!"
                className="text-4xl"
            />
            <div className="h-1/3"></div>
        </div>
    );
}
