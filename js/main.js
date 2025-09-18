// Ajout des cartes

//On crée la variable du bouton add en lui indiquant de chercher dans le DOM l'id btn
const addBtn = document.querySelector('#btn');
//On crée l'événement du click sur le bouton d'ajout qui provoquera la fonction addTask
addBtn.addEventListener('click', addTask);

//On crée la variable counter en disant au DOM de chercher par id l'élément HTMl qui nous intéresse
const counter = document.getElementById('counter');
//On crée la variable count, on choisit let car ce sera une variable qui pourra être changé. On le met à 1 car il y a déjà une carte par défaut.
let count = 1;
updateCount();


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
    tasksContainer.appendChild(newTask);
    //On y ajoute count++; qui est le raccourci de count+=1 qui lui-même est un raccourci de count = count+1. Cela permet de d'augmenter le compteur à chaque carte qui est ajouté
    count++;
    //On replace l'appel à la fonction updateCount pour actualiser le compteur au changement de variable count
    updateCount();
}


//Suppression des cartes to do

//Pour faire fonction le bouton de suppression (icône poubelle)
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', () => {
    deleteTask(taskCard);
});

//On crée la fonction delteTask qui agi sur le text aria "task"
function deleteTask(task) {
    //suppresion de task
    task.remove();
    //On y ajoute count--; pour décompter à chaque suppression de carte
    count = Math.max(0, count - 1);
    //On replace l'appel à la fonction updateCount pour actualiser le compteur au changement de variable count
    updateCount();
}

// Cette fonction permet de mettre à jour le chiffre indiqué dans la div counter (innerHTML) pour adapté à la variable count
function updateCount() {
    counter.textContent = count;
};

// Au départ je pensé qu'il fallait créer la fonction pour le compteur, et donc j'avais recrée les événements de click sur addBtn et delBtn
// Après des longues recherches, j'ai compris que cela crée des erreurs à cause des doublons.