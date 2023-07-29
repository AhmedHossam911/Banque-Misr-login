function showLoginForm(type) {
    const individualForm = document.getElementById('form-individual');
    const corporationForm = document.getElementById('form-corporation');
  
    if (type === 'individual') {
      individualForm.classList.add('show-form');
      corporationForm.classList.remove('show-form');
    } else if (type === 'corporation') {
      individualForm.classList.remove('show-form');
      corporationForm.classList.add('show-form');
    }
  }
  
  function handleLogin(type) {
    const username = document.querySelector(`#${type}-username`).value;
    const password = document.querySelector(`#${type}-password`).value;
  

    if (username === "user" && password === "password") {

      alert(`Login successful for ${type} user with username: ${username}`);
      return true;
    } else {

      alert(`Invalid username or password for ${type} user.`);
      return false;
    }
  }
  