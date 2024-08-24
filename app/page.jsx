import HomePage from "@/components/client/home_page";
import HomeNav from "@/components/client/home_navbar";


export default function Home() {
  return <div className="max-w-screen-xl bg-green">
    <HomeNav/>
    <HomePage/>
    </div>;
}

