import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <Hero />
      <About />
      <History />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
