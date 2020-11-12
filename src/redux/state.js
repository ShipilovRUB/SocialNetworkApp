let state = {
    
    profilePage:
    {
        posts:
            [
                { id: 1, message: "Does somebody love me?", likesCount: 16 },
                { id: 2, message: "It's my first post", likesCount: 7 }
            ]
    },

    messagesPage:
    {
        authors:
        [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Kristina" },
            { id: 3, name: "Sava" }
        ],
        messages:
        [
            { id: 1, text: "Hi" },
            { id: 2, text: "What is your name?" },
            { id: 3, text: "Yo" }
        ]
    }
    
}

export default state;