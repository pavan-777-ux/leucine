document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('createUserForm');
    const usersTableBody = document.getElementById('usersTableBody');

    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(userForm);
        const user = {
            username: formData.get('username'),
            password: formData.get('password'),
            role: formData.get('role'),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                alert('User created successfully!');
                userForm.reset();
                loadUsers();
            } else {
                alert('Failed to create user.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    async function loadUsers() {
        try {
            const response = await fetch('http://localhost:8080/users');
            const users = await response.json();

            usersTableBody.innerHTML = '';
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.role}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                `;
                usersTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    loadUsers();
});