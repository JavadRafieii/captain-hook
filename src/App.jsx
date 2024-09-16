import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";
import RailSlider from "./components/railSlider/RailSlider";
import Play from "./components/play/Play";
import Gear from "/gear.png";
import Gear2 from "/gear-2.png";
import Gear3 from "/gear-3.png";
import Gear4 from "/gear-4.png";

function App() {
  return (
    <main className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <Header />
      <Parallax />
      <RailSlider images={{ src1: Gear, src2: Gear, src3: Gear, }} />
      <Play />
      <RailSlider images={{ src1: Gear2, src2: Gear3, src3: Gear4, }} />
      <Footer />
    </main>
  );
}

export default App;