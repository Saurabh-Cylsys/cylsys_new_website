 // Function to fetch available services and populate the dropdown
 function fetchOrgList() {
    fetch('https://admin.cylsys.com/Partner/OrgList')
      .then(response => response.json())
      .then(data => {
        const OrganizationList = document.getElementById('PartnerShipList');
        OrganizationList.innerHTML = '<option value="">Select Partnership</option>';
        data.forEach(org => {
          const option = document.createElement('option');
          option.value = org.id;  // Use ID as the value
          option.textContent = org.organization_type;  // Display name in the dropdown
          OrganizationList.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }
  
  // Function to submit form data via POST request
  function submitForm(formData) {
    console.log('Submitting form data:', formData);
    fetch('https://admin.cylsys.com/Partner/savepartner', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert('Request submitted successfully!');
      console.log('Success:', data);
      // Clear the form after successful submission
      document.getElementById('quoteForm').reset();  // This will clear all the form fields
    })
    .catch(error => {
      alert('Error submitting request');
      console.error('Error:', error);
    });
  }
  
  // Wait for the DOM content to load before executing scripts
  document.addEventListener('DOMContentLoaded', function() {
    fetchOrgList();  // Call the function to populate the services dropdown
  
    const quoteForm = document.getElementById('quoteForm');
  
    // Listen for form submission
    quoteForm.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission behavior
      console.log("Form submission intercepted."); // Debugging log
      
      const formData = new FormData(quoteForm); // Get form data
      submitForm(formData);  // Submit the form data
    });
  });
  