let rerenderEntireTree = (state) => {
    console.log("State changed");
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello!", likesCount: 12 },
            { id: 2, message: "Its my first post", likesCount: 11 },
            { id: 3, message: "I liked watch this video", likesCount: 22 },
            { id: 4, message: "I am so happy", likesCount: 33 }
        ],
        newPostText: "",
    },
    dialogsPage: {
        msgList: [
            { id: 1, name: "John", message: "Hello!" },
            { id: 2, name: "Alice", message: "Hi!" },
            { id: 3, name: "Jack", message: "Do you like React?" },
            { id: 4, name: "Bonny", message: "I want to be happy everyday everyday" },
            { id: 5, name: "Max", message: "I am so ugly" },
            { id: 6, name: "Kate", message: "I am so happy" },
            { id: 7, name: "Alex", message: "I walk a lot today a day" },
            { id: 8, name: "Bob", message: "Hmmm" },
            { id: 9, name: "Vlad", message: "I liked watch this video" },
            { id: 10, name: "Dima", message: "I am so ugly" },
        ]
    }
}

export const addPost = (text) => {
    let newPost = {
        id: 5,
        message: text,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = "";
}

export const updatePostText = (Text) => {
    state.profilePage.newPostText = Text;
    rerenderEntireTree(state);
}

export const xRenderer = (observer) => {
    rerenderEntireTree = observer;
}

export default state