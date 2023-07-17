// Generate the current date
const today = new Date();
const thisYear = today.getFullYear();

// Create a paragraph with copyright details in the footer element
const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = '\u00A9Rodgers Mora Onchanah ' + thisYear;

footer.appendChild(copyright);

// Array with skills
const skills = ["HTML", "CSS", "JavaScript", "Python", "C++"];

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

// Fetch API
const url = 'https://api.github.com/users/morarodgers/repos';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network failure');
    }
    return response.json();
  })
  
  //Display the projects on the page
  .then(repositories => {
    console.log(repositories);
    
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      const repositoryLink = document.createElement('a');
      repositoryLink.href = repositories[i].html_url;
      repositoryLink.target = "_blank";
      repositoryLink.textContent = repositories[i].name;
      project.appendChild(repositoryLink);

      const repositoryDescription = document.createElement('p');
      repositoryDescription.textContent = repositories[i].description;
      project.appendChild(repositoryDescription);

      const repositoryDate = document.createElement('p');
      const createdOn = new Date(repositories[i].created_at);
      const formattedDate = createdOn.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
      repositoryDate.textContent = 'Created on: ' + formattedDate;
      project.appendChild(repositoryDate);

      projectList.appendChild(project);
    }
  })

  // Handle errors from the server
  .catch(err => {
    console.log("Error;", err);
    const errMessage = document.createElement('p');
    errMessage.textContent = "Oh no! Something doesn't seem right. Please try again.";
    document.body.appendChild(errMessage);
  });
  /*
  const githubRequest = new XMLHttpRequest();
  githubRequest.open("GET", "https://api.github.com/users/morarodgers/repos", true);
  githubRequest.send();
  githubRequest.addEventListener('load', function(event) {
    const repositories = JSON.parse(this.response);
    console.log(repositories);
    
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement('li');
        const repositoryLink = document.createElement('a');
        repositoryLink.href = repositories[i].html_url;
        repositoryLink.textContent = repositories[i].name;
        project.appendChild(repositoryLink);

        const repositoryDescription = document.createElement('p');
        repositoryDescription.textContent = repositories[i].description;
        project.appendChild(repositoryDescription);

        const repositoryDate = document.createElement('p');
        const createdOn = new Date(repositories[i].created_at);
        const formattedDate = createdOn.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        repositoryDate.textContent = 'Created on: ' + formattedDate;
        project.appendChild(repositoryDate);

        projectList.appendChild(project);
    }
});*/
