const greetings = [
    {
        message: "Welcome"
    },
    {
        message: "안녕하세요"
    },
    {
        message: "Haere Mai"
    },
    {
        message: "ようこそ"
    },
    {
        message: "你好"
    }
];

const greetingHead = document.querySelector("#greetings-head span:first-child");
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

greetingHead.innerText = randomGreeting.message;
