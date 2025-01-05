import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to Form Builder</h1>
      <nav>
        <Link to="/admin">Admin Panel</Link> | <Link to="/user">User Panel</Link>
      </nav>
    </div>
  );
}

function AdminPanel() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('/api/forms')
      .then(response => setForms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="/create-form">Create Form</Link>
      <h3>Your Forms:</h3>
      <ul>
        {forms.map(form => (
          <li key={form.id}>
            {form.title} - <Link to={`/form/${form.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserPanel() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('/api/forms')
      .then(response => setForms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>User Panel</h2>
      <h3>Available Forms:</h3>
      <ul>
        {forms.map(form => (
          <li key={form.id}>
            {form.title} - <Link to={`/submit-form/${form.id}`}>Submit Response</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreateForm() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', type: 'text', options: [] }]);
  };

  const handleSaveForm = () => {
    axios.post('/api/forms', { title, questions })
      .then(response => alert('Form Created Successfully'))
      .catch(error => console.error(error));
  };

  const handleAddOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push('');
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <h2>Create Form</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Form Title"
      />
      <button onClick={handleAddQuestion}>Add Question</button>
      {questions.map((q, index) => (
        <div key={index}>
          <input
            type="text"
            value={q.text}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].text = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder="Question Text"
          />
          <select
            value={q.type}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].type = e.target.value;
              setQuestions(newQuestions);
            }}
          >
            <option value="text">Text</option>
            <option value="dropdown">Dropdown</option>
            <option value="checkbox">Checkbox</option>
          </select>
          {['dropdown', 'checkbox'].includes(q.type) && (
            <div>
              {q.options.map((option, oIndex) => (
                <input
                  key={oIndex}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, oIndex, e.target.value)}
                  placeholder={`Option ${oIndex + 1}`}
                />
              ))}
              <button onClick={() => handleAddOption(index)}>Add Option</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSaveForm}>Save Form</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/create-form" element={<CreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
