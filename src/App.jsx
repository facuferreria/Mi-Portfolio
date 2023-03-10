import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import Presentation from './Components/Presentation/Presentation';
import About from './Components/About/About';
import Proyects from './Components/Proyects/Proyects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Contact from './Components/Contact/Contact';
import { ScrollAnimationProvider } from './Components/Hooks/useScrollAnimation';
import Footer from './Components/Footer/Footer';

library.add(fas, far, fab);

function App() {

  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <ScrollAnimationProvider threshold={window.screen.width <= 768 ? 325 : 400}>
        <About />
      </ScrollAnimationProvider>
      <ScrollAnimationProvider threshold={1050}>
        <Proyects />
      </ScrollAnimationProvider>
      <ScrollAnimationProvider threshold={1700}>
        <Contact />
        <Footer />
      </ScrollAnimationProvider>
      
    </div>
  )
}

export default App
