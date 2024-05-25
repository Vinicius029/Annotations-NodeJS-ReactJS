import React from 'react';

function Notes({ data }){
    return(
        <>
        <li className="notepad-infos">
            <div>
              <strong>{data.title}</strong>
              <div>X</div>
              
            </div>
            <textarea defaultValue={data.notes}></textarea>
            <span>!</span>
          </li>
        </>
    )
}

export default Notes;