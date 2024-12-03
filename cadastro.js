
        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById('registrationForm');
            const errorMessages = document.getElementById('errorMessages');

            form.addEventListener('submit', function(event) {
                errorMessages.innerHTML = ''; 

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();
                let hasErrors = false;

                if (name === '') {
                    errorMessages.innerHTML += '<p>O nome é obrigatório.</p>';
                    hasErrors = true;
                }
                if (email === '' || !validateEmail(email)) {
                    errorMessages.innerHTML += '<p>O e-mail é inválido.</p>';
                    hasErrors = true;
                }
                if (password === '' || password.length < 6) {
                    errorMessages.innerHTML += '<p>A senha deve ter pelo menos 6 caracteres.</p>';
                    hasErrors = true;
                }

                if (hasErrors) {
                    event.preventDefault(); 
                }
            });

            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(String(email).toLowerCase());
            }
        });

        
        function renderDynamicElements() {
            const container = document.querySelector('.container');
            const dynamicContent = document.createElement('div');
            dynamicContent.classList.add('dynamic-content');
            dynamicContent.innerHTML = `
                <h3>Conteúdo Dinâmico</h3>
                <p>Este é um exemplo de conteúdo gerado dinamicamente via JavaScript.</p>
            `;
            container.appendChild(dynamicContent);
        }

        
        document.addEventListener('DOMContentLoaded', renderDynamicElements);
   

    