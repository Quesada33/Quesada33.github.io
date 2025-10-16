  document.addEventListener('DOMContentLoaded', function() {
            // Actualizar año del copyright
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Navegación por pestañas
            const tabButtons = document.querySelectorAll('.nav-btn');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Quitar clase active de todos los botones
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Añadir clase active al botón clickeado
                    this.classList.add('active');
                    
                    // Obtener el tab correspondiente
                    const tabId = this.getAttribute('data-tab');
                    
                    // Ocultar todos los tabs
                    document.querySelectorAll('.tab-content').forEach(tab => {
                        tab.classList.remove('active');
                    });
                    
                    // Mostrar el tab seleccionado
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Animación de barras de habilidades
            const skillBars = document.querySelectorAll('.skill-fill');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
            
            // Disparar animación cuando el usuario llega a la sección
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('.skill-fill').forEach(bar => {
                observer.observe(bar);
            });
        })

         