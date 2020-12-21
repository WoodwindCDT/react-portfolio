// Imports
import React, {useState} from 'react';

// Imported components
import Navigation from './components/Nav'
import Projects from "./components/Projects";
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume';

function App() {
  const [currentPage, setPage] = useState('About Me');

  // this handles what page is being rendered based on the currentPage useState
  const page = () => {
    switch (currentPage) {
      default:
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact': 
        return <Contact />
      case 'Resume':
        return <Resume />
    }

};

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setPage={setPage}/>

      <main>
        {page()}
      </main>
    </div>
    
  );
}

export default App;