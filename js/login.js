$('#loginForm').submit(function(e) {
  e.preventDefault();
  const user = $('#username').val();
  const pass = $('#password').val();
  if (user === 'user' && pass === '123') {
    localStorage.setItem('loggedin', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('အသုံးပြုသူအမည် သို့ လျှို့ဝှက်နံပါတ် မှားနေပါသည်');
  }
});