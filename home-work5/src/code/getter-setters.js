

const userProfile = {
    name: "John Doe",
    age: 30,
    _email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001",
        location: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    _hobbies: ["reading", "gaming", "hiking"],
    _friends: [
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
    get hobbies() {
        return 'The user\'s hobbies ' + this._hobbies.join(', ');
    },
    set friends(friendInfo) {
        this._friends.push(
            {
                name: friendInfo[0],
                age: friendInfo[1],
                email: friendInfo[2]
            }
        );
    },
    get friends() {
        let allFriends = '';

        for (let index = 0; index < this._friends.length; index++) {

            const currentFriend = this._friends[index];
            const friendInfo = (
                `${index+1}.Friend name ${currentFriend.name} ` +
                `and email ${currentFriend.email} ` +
                `and age ${currentFriend.age} years old\n`
            );

            allFriends += friendInfo;
        }

        return allFriends;

    },
    get email() {
        return this._email;
    },
    set email(NewEmail) {
        this._email = NewEmail;
    }
};

// Get information about hobbies
console.log(userProfile.hobbies);

// get and set email
userProfile.email = 'john_work_email.doe@example.com';
console.log(userProfile.email);

// Get and set friends
userProfile.friends = ['Marta', 26, 'marta@example.com'];
console.log(userProfile.friends);
