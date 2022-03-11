import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
//import Test from './components/Test';
import './App.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  // Set the 'categories' state
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks and other stuff'
    },
    { name: 'portraits', description: 'Portraits of people in my life'},
    { name: 'food', description: 'Delicious delicacies'},
    { name: 'landscape', description: 'Fields, farms and etc'},
  ]);

  // Set the 'currentCategory' state
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        // Set the props that will be fed to the Nav component
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Nav>
      <main>
        
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        
      </main>
    </div>
  );
}

export default App;
