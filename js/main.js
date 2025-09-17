// Ajout des cartes

//On crée la variable du bouton add en lui indiquant de chercher dans le DOM l'id btn
const addBtn = document.querySelector('#btn');
//On crée l'événement du click sur le bouton d'ajout qui provoquera la fonction addTask
addBtn.addEventListener('click', addTask);

//On crée la fonction d'ajout (addTask)

//On commence par crée les variables indiquant de chercher l'id ou l'attribut dans le DOM
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

function addTask() {
    //création de la variable newTask qui va créer une copie de taskCard mais avec cloneNode cela compte comme un élément à lui-même
    const newTask = taskCard.cloneNode(true)
    //création de la variable newTextAria qui va utiliser la variable newTask pour retrouver l'attribut task du clone "taskCard" dans le DOM 
    const newTextArea = newTask.querySelector('.task')

    //Ici la newTextAra va prendre la valeur de nouvelle task et donc ainsi devenir la nouvelle task
    newTextArea.value = "New Task"
    //Cette action va relier la nouvelle task au tasks Container, en tant que "enfant"
    tasksContainer.appendChild(newTask)
}