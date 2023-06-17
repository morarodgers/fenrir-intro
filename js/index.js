// Generate the current date
const today = new Date();
const thisYear = today.getFullYear();

// Create a paragraph with copyright details in the footer element
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = 'Rodgers Mora Onchanah \u00A9' + thisYear;
copyright.style.color = 'turquoise';

footer.appendChild(copyright);

// Array with skills
const skills = ["HTML", "CSS", "JavaScript", "Python", "A little bit of C++"];

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
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    // Clear form after submitting
    messageForm.reset();

    // Creating a new list item for users messages
    const messageSection = document.querySelector('#messages');
    
    // Display the message section
    messageSection.style.display = "block";

    // Add the list items
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href='mailto:${userEmail}'>${userName}</a> <span>${message}</span>`;
    
    // Create a a container for the input
    const messageText = document.createElement('span');
    messageText.classList.add('messageTxt');
    messageText.textContent = message;

    // Create input for editing messages
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    editInput.type = 'text';
    

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();

        // Hide message section when messages are deleted
        if (messageList.children.length === 0) {
          messageSection.style.display = 'none';
        } else {
          messageSection.style.display = 'block';
        }
    });

    // Create edit button and a Function to run when it is clicked
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.addEventListener('click', function () {
      const entry = event.target.parentNode;
      const messageText = entry.querySelector('.messageTxt');
      const editInput = entry.querySelector('.edit-input');
    
      messageText.style.display = 'none';
      editInput.value = message.textContent;
      editInput.style.display = 'inline-block';
      editInput.focus();
    });

    // Create save button and a Function to run when the button is clicked
    const saveButton = document.createElement('button');
    saveButton.innerText = 'save';
    saveButton.type = 'button';
    saveButton.addEventListener('click', function () {
      const entry = event.target.parentNode;
      const messageText = entry.querySelector('.messageTxt');
      const editInput = entry.querySelector('.edit-input');
      const editedMessage = editInput.value;
    
      messageText.textContent = editedMessage;
      messageText.style.display = 'inline-block';
      editInput.style.display = 'none';
    });
    

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
newMessage.appendChild(saveButton);
messageList.appendChild(newMessage);
});

