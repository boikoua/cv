import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import HomePage from './assets/pages/HomePage';
import SkillsPage from './assets/pages/SkillsPage';
import ProjectsPage from './assets/pages/ProjectsPage';
import ContactsPage from './assets/pages/ContactsPage';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
