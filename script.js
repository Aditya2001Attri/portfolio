// Theme toggle + smooth scroll + small interactions
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  // Load saved theme
  const saved = localStorage.getItem('site-theme');
  if(saved === 'light') document.body.classList.add('light');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const active = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('site-theme', active === 'light' ? 'light' : 'dark');
    btn.textContent = active === 'light' ? '🌙' : '☀️';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Replace photo placeholder with your uploaded image if available
  const photoDiv = document.getElementById('photo');
  fetch('assets/photo.jpg', {method:'HEAD'}).then(res=>{
    if(res.ok){
      photoDiv.innerHTML = '<img src="assets/photo.jpg" alt="Aditya Attri">';
    }
  }).catch(()=>{ /* no photo provided */ });
})();
