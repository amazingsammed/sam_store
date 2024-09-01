
import HomeNav from "@/app/(home)/_component/home_navbar";



export default function Layout({ children }) {
  return (
        <div>
            <HomeNav />
          <div >{children}</div>
        </div>
  );
}

// max-w-4xl mx-auto p-4