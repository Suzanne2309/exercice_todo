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
    //On créer la variable newDelBtn qui va accéder au DOM pour ajouter le bouton de suppression aux nouvelles tasks
    const newDelBtn = newTask.querySelector('.delBtn')
    //création de la variable newTextAria qui va utiliser la variable newTask pour retrouver l'attribut task du clone "taskCard" dans le DOM 
    const newTextArea = newTask.querySelector('.task')

    //Ici la newTextAra va prendre la valeur de nouvelle task et donc ainsi devenir la nouvelle task
    newTextArea.value = "New Task"
    //On créer l'événement de click contentant la fonction de suppression de la task pour que cela s'applique sur les nouvelles tasks
    newDelBtn.addEventListener('click', function () {
        deleteTask(newTask);
    })

    //Cette action va ajouter la nouvelle carte dans le DOM, en la reliant au tasks Container en tant que "enfant".
    tasksContainer.appendChild(newTask)
}


//Suppression des cartes to do

//Pour faire fonction le bouton de suppression (icône poubelle)
const delBtn = document.querySelector('delBtn');
delBtn.addEventListener('click', function () {
    deleteTask(taskCard);
});

//On crée la fonction delteTask

function deleteTask(task) {
    task.remove();
}

