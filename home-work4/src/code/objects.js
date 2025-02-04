
const userProfile = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001",
        location: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ["reading", "gaming", "hiking"],
    friends: [
        {
            name: "Alice",
            age: 28,
            email: "alice@example.com"
        },
        {
            name: "Bob",
            age: 32,
            email: "bob@example.com"
        }
    ],
    getFriends() {
        for (const friend of this.friends) {
            console.log(`Friend name ${friend.name}`);
            console.log(`Friend email ${friend.email}`);
            console.log(`Friend age ${friend.age}\n`);
        }
    },
    addNewHobby(hobby) {
        this.hobbies.push(hobby);
    },
    getAllHobbies() {
        for (const hb of this.hobbies) {
            console.log(hb);
        }
    }


};

console.log(userProfile);
userProfile.getFriends();
userProfile.addNewHobby('Programming JS');
userProfile.getAllHobbies();
