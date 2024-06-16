
import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles/global.css";
import "./styles/siderbar.css";
import "./styles/app.css";
import "./styles/main.css";
import Notes from './Components/Notes';
import RadioButton from './Components/RadioButton';

function App() {

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function getAllNotes(){
      const response = await api.get('/annotations', );

      setAllNotes(response.data);
    }

    getAllNotes();
  }, [])

  useEffect(() => {
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit');
      btn.style.background = '#ffd3ca';
      if(title && notes){
        btn.style.background = '#eb8f7a'
      }
    }

    enableSubmitButton()
  },[title, notes])

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitle('');
    setNotes('');

    setAllNotes([...allNotes, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotação</label>
            <textarea 
            value={notes}
            onChange={e => setNotes(e.target.value)}
            ></textarea>
          </div>
          <button id='btn_submit' type="submit">Enviar</button>
        </form>

        < RadioButton />

      </aside>

      <main>
        <ul>
          {allNotes.map(data => (<Notes data={data}/>))}
        </ul>
      </main>
    </div>
  );
}

export default App;
