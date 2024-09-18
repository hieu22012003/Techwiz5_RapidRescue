// Sample user data
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Function to display users in the table
function displayUsers() {
    const userBody = document.getElementById('userBody');
    userBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        userBody.appendChild(row);
    });
}

// Add new user
document.getElementById('addUserBtn').addEventListener('click', () => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const name = prompt("Enter user name:");
    const email = prompt("Enter user email:");
    
    if (name && email) {
        users.push({ id, name, email });
        displayUsers();
    }
});

// Edit user
function editUser(id) {
    const user = users.find(user => user.id === id);
    
    document.getElementById('editUserId').value = user.id;
    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserEmail').value = user.email;
    
    document.getElementById('editUserModal').style.display = 'flex';
}

// Delete user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

// Close edit modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('editUserModal').style.display = 'none';
});

// Save changes in edit modal
document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const id = parseInt(document.getElementById('editUserId').value);
    const name = document.getElementById('editUserName').value;
    const email = document.getElementById('editUserEmail').value;
    
    const user = users.find(user => user.id === id);
    user.name = name;
    user.email = email;
    
    displayUsers();
    document.getElementById('editUserModal').style.display = 'none';
});

// Initial display of users
displayUsers();
