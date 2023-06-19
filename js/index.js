// Generate the current date
const today = new Date();
const thisYear = today.getFullYear();

// Create a paragraph with copyright details in the footer element
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = 'Rodgers Mora Onchanah \u00A9' + thisYear;
copyright.style.color = 'purple';

footer.appendChild(copyright);

// Array with skills
const skills = ["HTML", "CSS", "JavaScript", "Python", "A little bit of C++"];

const skillsSection = document.querySelector('#skills');
const skillslist = skillsSection.querySelector('ul');
skillslist.classList.add("skills");
//skillslist.style.background = '#e0be55';

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
    newMessage.classList = 'messages';
    newMessage.innerHTML = `<a href='mailto:${userEmail}'>${userName}</a><span>${message}</span>`;

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

    // Create edit & save buttons 
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';

    // Functions to edit and save content when the buttons are clicked
    editButton.addEventListener('click', function (event) {
      const button = event.target;
      const li = editButton.parentNode;
      const ul = li.parentNode;
      if(button.innerText === 'edit') {
        const span = li.childNodes[1];
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        editButton.innerText = 'save'
      } else if(button.innerText === 'save') {
        const input = li.childNodes[1];
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        editButton.textContent = 'edit';
      }
      
    });

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
});

