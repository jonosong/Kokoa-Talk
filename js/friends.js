const greeting = document.getElementById("greeting");
const usernameTop = document.getElementById("username-top");
const savedUsername = localStorage.getItem("username");
const todaysFriendsQuote = document.getElementById("f-quote");

function paintUsernameTop(username){
    usernameTop.innerText = `${username}`;
}

function paintGreetings(username) {
    greeting.innerText = `Greetings, ${username}`; // shows the text
}

paintUsernameTop(savedUsername);
paintGreetings(savedUsername);

// below quotes are retrieved from https://www.berries.com/blog/friendship-quotes
const friendQuotes = [
    {
        message: "I would rather walk with a friend in the dark, than alone in the light. -Helen Keller"
    },
    {
        message: "A true friend accepts who you are, but also helps you become who you should be. -Unknown"
    },
    {
        message: "Keep the ones that heard you when you never said a word. -Unknown"
    },
    {
        message: "Sometimes, being with your best friend, is all the therapy you need. -Unknown"
    },
    {
        message: "A friend knows the song in my heart and sings it to me when my memory fails. -Donna Roberts"
    },
    {
        message: "Because of you, I laugh a little harder, cry a little less, and smile a lot more. -Unknown"
    },
    {
        message: "What draws people to be friends is that they see the same truth. They share it. -C.S. Lewis"
    },
    {
        message: "True friends are like diamonds—bright, beautiful, valuable, and always in style. -Nicole Richie"
    },
    {
        message: "A friend is someone who makes it easy to believe in yourself. -Heidi Wills"
    },
    {
        message: "Rare as is true love, true friendship is rarer. -Jean de La Fontaine"
    },
];


const randomFriendsQuote = friendQuotes[Math.floor(Math.random() * friendQuotes.length)];

todaysFriendsQuote.innerText = randomFriendsQuote.message;
