import Header from "./components/header";
import LineSeparator from "./components/line-separtor";
import About from "./components/about";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <LineSeparator />
      <About />
    </div>
  );
}
