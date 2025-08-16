 const dropdown = document.getElementById('dropdown');
    const dropdownBtn = dropdown.querySelector('.dropdown-btn');

    dropdownBtn.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });


    const h1 = document.querySelector('.h1-nh');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            h1.classList.add('visible');
        } else {
            h1.classList.remove('visible'); 
        }
    });
}, { threshold: 0.1 }); 

observer.observe(h1);





