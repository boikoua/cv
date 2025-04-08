import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './assets/components/Header';
import HomePage from './assets/pages/HomePage';
import SkillsPage from './assets/pages/SkillsPage';
import ProjectsPage from './assets/pages/ProjectsPage';
import ContactsPage from './assets/pages/ContactsPage';
import { useEffect, useState } from 'react';
import BurgerMenu from './assets/components/BurgerMenu';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {isOpen && <BurgerMenu setIsOpen={setIsOpen} />}

      {!isOpen && (
        <>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
};

export default App;
