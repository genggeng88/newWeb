function uploadAvatar(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var avatarImage = document.getElementById('avatarImage');
      avatarImage.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  
  function editInfo() {
    document.querySelectorAll('.info').forEach(function(infoBlock) {
      var span = infoBlock.querySelector('span');
      var input = infoBlock.querySelector('input');
      input.value = span.textContent;
      span.style.display = 'none';
      input.style.display = 'inline';
    });
    document.querySelector('.edit-btn').classList.add('hidden');
    document.querySelector('.save-btn').classList.remove('hidden');
  }
  
  function saveInfo() {
    document.querySelectorAll('.info').forEach(function(infoBlock) {
      var span = infoBlock.querySelector('span');
      var input = infoBlock.querySelector('input');
      span.textContent = input.value;
      span.style.display = 'inline';
      input.style.display = 'none';
    });
    document.querySelector('.edit-btn').classList.remove('hidden');
    document.querySelector('.save-btn').classList.add('hidden');
    // Here you should add code to send updated info to the server
  }


function toggleAddEducationForm() {
  var formModal = document.getElementById('education-form-modal');
  formModal.classList.toggle('hidden');
}

document.getElementById('add-education-form').onsubmit = function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  var universityName = document.getElementById('university-name').value;
  var relevantCoursework = document.getElementById('relevant-coursework').value;
  addEducation(universityName, relevantCoursework);

  toggleAddEducationForm(); // Hide the form
  // Clear the form fields
  document.getElementById('university-name').value = '';
  document.getElementById('relevant-coursework').value = '';
};

function addEducation(university, coursework) {
  const educationList = document.getElementById('edu-list');
  const entry = document.createElement('li');
  entry.className = 'edu-entry';
  entry.innerHTML = `
      <div class="entry-content">
          <p><b>${university}</b><br>Relevant Coursework: ${coursework}</p>
      </div>
      <button onclick="deleteEducation(this)" class="delete-btn">X</button>
  `;
  educationList.appendChild(entry);
}

function deleteEducation(button) {
    // Remove the closest list item (education entry)
    button.closest('.edu-entry').remove();
}

function toggleAddExperienceForm() {
  var formModal = document.getElementById('experience-form-modal');
  if (!formModal) {
    console.log('Modal element not found'); // Debugging line to check if the modal element is found
    return;
  }
  formModal.classList.toggle('hidden');
}

document.getElementById('add-experience-form').onsubmit = function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  var companyName = document.getElementById('company-name').value;
  var role = document.getElementById('role').value;
  addExperience(companyName, role);

  toggleAddExperienceForm(); // Hide the form
  // Clear the form fields
  document.getElementById('company-name').value = '';
  document.getElementById('role').value = '';
};

function addExperience(companyName, role) {
  const experienceList = document.getElementById('exp-list'); // Make sure you have an experience list in HTML
  const entry = document.createElement('li');
  entry.className = 'exp-entry';
  entry.innerHTML = `
      <div class="entry-content">
          <p><b>${companyName}</b><br>Role: ${role}</p>
      </div>
      <button onclick="deleteExperience(this)" class="delete-btn">X</button>
  `;
  experienceList.appendChild(entry);
}

function deleteExperience(button) {
  // Remove the closest list item (education entry)
  button.closest('.exp-entry').remove();
}
