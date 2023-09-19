const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
   const response = await fetch(url);
   const users = await response.json();
   return users;
}

const users = await getUsers();

function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsersFromStorage() {
    const storedUsers = localStorage.getItem('users');
    return JSON.parse(storedUsers);
}

function showUsers(users) {
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';

        const userID = document.createElement('span');
        userID.textContent = `${user['id']}: `;

        const name = document.createElement('span');
        name.textContent = `${user['name']}  `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'btn_delete';
        deleteButton.addEventListener('click', () => deleteUser(user));

        userDiv.appendChild(userID);
        userDiv.appendChild(name);
        userDiv.appendChild(deleteButton);

        document.body.appendChild(userDiv);
    });
}

function deleteUser(user) {
    const currentUsers = getUsersFromStorage();
    const newUserList = currentUsers.filter(u => u.id !== user.id);
    document.body.innerHTML = '';
    saveUsersToStorage(newUserList);
    showUsers(newUserList);
}


(async() => {
    const users = await getUsers();
    saveUsersToStorage(users);
    showUsers(getUsersFromStorage());
})();
