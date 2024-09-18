//Sample User data 
let users = [
    {id: 1, name: "Minh Duc", email: "dcutmth2306007@fpt.edu.vn"},
    {id: 2, name: "Hong Quan", email: "hongquan@gmail.com"}
];

//Function to display users in the table
function displayUsers(){
    const userbody = document.getElementById('userbody');
    userbody.innerHTML = '';

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
            userbody.appendChild(row)
    });
}

//Add new user
document.getElementById('addUserBtn').addEventListener('click', ()+>{
        const id = users.length ? users[users.length - 1].id + 1 : 1;
        const name = prompt("Enter Username");
        cosnt email = prompt("Enter user email");

        if (name && email){
            users.push({id,name,email});
            displayUsers();
        }
});