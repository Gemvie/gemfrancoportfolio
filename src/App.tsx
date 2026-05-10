import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Work } from "./components/Work";
import { WhyMe } from "./components/WhyMe";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Work />
        <WhyMe />
        <About />
        <Contact />
      </main>
    </div>
  );
}
