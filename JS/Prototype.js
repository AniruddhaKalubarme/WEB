// User Constructor
const User = function(name) {
    this.name = name;
    this.chatroom = null;
};

// User Prototype Methods
User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },

    receive: function(message, from) {              
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};


// Chatroom Constructor
const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function(message, from, to) {
            if (to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for (let key in users) {
                    if (users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    };
};


// Create Users
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

// Create Chatroom
const chatroom = new Chatroom();

// Register Users
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

// Send Messages
brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!');
