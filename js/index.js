const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.textContent = 'Rodgers \u00A9' + thisYear;
copyright.style.color = 'turquoise';
footer.appendChild(copyright);

const skills = ["JavaScript", "Python", "A little bit of C++"];

const skillsSection = document.querySelector('#skills');
const skillslist = skillsSection.querySelector('ul');
skillslist.style.background = '#e0be55';
for (let i = 0; i < skills.length; i ++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillslist.appendChild(skill);
}
