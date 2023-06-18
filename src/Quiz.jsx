import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const supportedLanguages = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'italian', label: 'Italian' },
  { value: 'portuguese', label: 'Portuguese' },
  // Add more supported languages here
];

export default function Quiz() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };
  
  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call GPT-4 API or perform language learning operations
  };
  
  return (
    <div className="container">
      <h1 className="mt-5 text-center">Vocabella</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Select a Language:</label>
              <select
                className="form-control form-control-sm"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                {supportedLanguages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Enter a Theme:</label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={selectedTheme}
                onChange={handleThemeChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Select Difficulty Level:</label>
              <select
                className="form-control form-control-sm"
                value={selectedDifficulty}
                onChange={handleDifficultyChange}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                {/* Add more difficulty options */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary text-center mx-auto d-block">
              Start Learning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
