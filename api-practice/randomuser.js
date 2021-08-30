const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayLoad(data))
}
loadBuddies();
const displayLoad = (data) => {
    // console.log(buddies);
    const buddies = data.results;
    const displayInput = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}    Email:${buddy.email}`;
        displayInput.appendChild(p)
    }
}