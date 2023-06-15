// Generate the current date
const today = new Date();
const thisYear = today.getFullYear();

// Create a paragraph with copyright details in the footer element
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = 'Rodgers \u00A9' + thisYear;
copyright.style.color = 'turquoise';
footer.appendChild(copyright);

// Array with skills
const skills = ["JavaScript", "Python", "A little bit of C++"];

const skillsSection = document.querySelector('#skills');
const skillslist = skillsSection.querySelector('ul');
skillslist.style.background = '#e0be55';

// Populate the unordered list with the array elements
for (let i = 0; i < skills.length; i ++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillslist.appendChild(skill);
}

// Adding an event listener to the form's submit button
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event) {
    //prevent form from submitting/refreshing the page
    event.preventDefault();

    // Get values from the controls
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    // Log the user enetered values to the console
    console.log("User's Name: ", usersName);
    console.log("User's Email: ", usersEmail);
    console.log("Message: ", message);

    // Clear form after submitting
    messageForm.reset();

    // Creating a new list item for users messages
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href='mailto:${usersEmail}'>${usersName}</a> <span>${message}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
   
    });

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
});

/* window.onload = (event) => {
    let node = document.getElementById('#messages');
    let element = node.querySelector('ul');
    if (element !== null) {
    node.remove();
}

};

const messageSection = document.querySelector('#messages');
const messageList = document.querySelector('#messageList');

// Check if there is a list of messages
if (messageList.children.length === 0) {
  messageSection.style.display = 'none';
} else {
  messageSection.style.display = 'block';
}*/
