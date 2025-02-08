

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
    get getAllHobbies() {
        return 'The user\'s hobbies ' + this.hobbies.join(', ');
    },
    get getFriends() {
        let allFriends = '';

        for (let index = 0; index < this.friends.length; index++) {

            const currentFriend = this.friends[index];
            const friendInfo = (
                `${index+1}.Friend name ${currentFriend.name} ` +
                `and email ${currentFriend.email} ` +
                `and age ${currentFriend.age} years old\n`
            );

            allFriends += friendInfo;
        }

        return allFriends;

    },
    set changeEmail(email) {
        this.email = email;
    },
    set makeNewFriend(friendInfo) {
        this.friends.push(
            {
                name: friendInfo[0],
                age: friendInfo[1],
                email: friendInfo[2]
            }
        );
    }
};

// Get some information about user
console.log(userProfile.getFriends);
console.log(userProfile.getAllHobbies);

// Change email
userProfile.changeEmail = 'john_work_email.doe@example.com';
console.log(userProfile.email);

// Add new friend to user
userProfile.makeNewFriend = ['Marta', 26, 'marta@example.com'];
console.log(userProfile.getFriends);
