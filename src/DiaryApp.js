import React, { useState } from 'react';

function DiaryApp() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddEntry = () => {
    setEntries([...entries, { text: input, title: title, id: Date.now() }]);
    setInput('');
    setTitle('');
    
  };
  const handleInputTitle = (e) => {
    setTitle(e.target.value)
  }


  return (
    <div style={{ padding: '20px' }}>
      <h1>My Dairy</h1>
      <div>
        <span>제목 : </span> 
        <input onChange={handleInputTitle} value={title}/>
      </div>
      <div>
        <span>내용 : </span>
        <textarea value={input} onChange={handleInputChange} placeholder="Write your diary..." />
        <button style={{ display:'block' }} onClick={handleAddEntry}>Add Entry</button>
      </div>
      <div>
        {entries.map(entry => (
          <div key={entry.id} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
            제목 : {entry.title} <br />
            내용 : {entry.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaryApp;
