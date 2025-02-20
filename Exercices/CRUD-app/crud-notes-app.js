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


function loadNotes(filter=""){
    document.getElementById('notes').innerHTML="";
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach((variable,index)=> {

        if (filter && !variable.title.toLowerCase().includes(filter.toLowerCase())) {
            return;
        }

        let noteDiv = document.createElement('div');
        noteDiv.className="notediv";
        noteDiv.style.background = variable.color;
        noteDiv.style.border = `1px dashed black`
        noteDiv.innerHTML=`
                <input  class="fields" type="text" value="${variable.title}" oninput="updateNote(${index}, 'title', this.value)" style="background-color:${variable.color}" >
                <hr>
                <textarea class="fields" oninput="updateNote(${index}, 'text', this.value)"  style="background-color:${variable.color}">${variable.text}</textarea>
                <input type="color" value="${variable.color}" oninput="updateNote(${index}, 'color', this.value)">
                <p>Saved: ${variable.time}</p>
                <button onclick="deleteNote(${index})"  style="background-color:${variable.color}">Delete</button>
        `
        ;

        document.getElementById('notes').appendChild(noteDiv);


    })

    console.table(notes)

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

function searchNotes(){
    let searchValue = document.getElementById('search').value;
    loadNotes(searchValue);
}

function clearSearch(){
    document.getElementById('search').value="";
    loadNotes()
}


window.onload = loadNotes();