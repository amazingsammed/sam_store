
import HomeNav from "@/app/(home)/_component/home_navbar";



export default function Layout({ children }) {
  return (
        <div>
            <HomeNav />
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </div>
  );
}

// max-w-4xl mx-auto p-4