function addNote(){
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;
    let color = document.getElementById('color').value;
    let time = new Date().toLocaleString();
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({title,text,color,time});
    localStorage.setItem('notes',JSON.stringify(notes));
    loadNotes();
}


function setColor(color){
    document.getElementById('color').value = color;
}


function loadNotes(){
    document.getElementById('notes').innerHTML="";
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((variable,index)=> {
        let noteDiv = document.createElement('div');
        noteDiv.className="notediv";
        noteDiv.style.background = variable.color;
        noteDiv.style.border = `1px dashed black`
        noteDiv.innerHTML=`
                <input type="text" value="${variable.title}" oninput="updateNote(${index}, 'title', this.value)">
                <textarea oninput="updateNote(${index}, 'text', this.value)">${variable.text}</textarea>
                <input type="color" value="${variable.color}" oninput="updateNote(${index}, 'color', this.value)">
                <p>Saved: ${variable.time}</p>
                <button onclick="deleteNote(${index})">Delete</button>
        `;

        document.getElementById('notes').appendChild(noteDiv);
    })
}

function updateNote(index,key,value){
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes[index][key] = value;
    localStorage.setItem('notes',JSON.stringify(notes));
}


function deleteNote(index){
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notes));
    loadNotes();
}

window.onload = loadNotes();