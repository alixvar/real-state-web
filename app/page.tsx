import AboutUs from "@/components/AboutUs";
import SearchBox from "@/components/SearchBox";
import Featured from "@/components/Featured";
import LandingPageTop from "@/components/LandingPageTop";

export default function Home() {
  return (
    <main className="px-4">
      <LandingPageTop />
      <AboutUs />
      <SearchBox />
      <Featured />
    </main>
  );
}
