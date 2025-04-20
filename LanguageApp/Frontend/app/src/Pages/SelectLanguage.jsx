import { useNavigate } from "react-router-dom";
import './SelectLanguage.css';

const languages = ['HTML', 'CSS', 'JavaScript', 'Python'];

const SelectLanguage = () => {
  const navigate = useNavigate();

  const handleSelect = (language) => {
    navigate(`/quiz/${language.toLowerCase()}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Select a Language</h2>
      <ul style={{ listStyle: 'none' }}>
        {languages.map((lang) => (
          <li key={lang} style={{ margin: '10px' }}>
            <button onClick={() => handleSelect(lang)}>{lang}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectLanguage;
