let randomTopics = [
    "What do you like to wear?",
    "Are you interested in learning about other cultures? Why?",
    "Do you usually exercise, if so, how often?",
    "What is your biggest fear and why?",
    "How do you deal with stress?",
    "Why is it important to think about other people’s feelings?",
    "What is your favorite manga? Why?",
    "What is your least favourite food and why?",
    "What is a goal that you have?",
    "Do you think aliens exist?",
    "What hobbies do you like to do?",
    "How do you spend most of your holidays?",
    "Do you like living in your hometown? Why?",
    "Would you rather be super strong or super fast?",
    "What do you want to be when you grow up and why?",
    "What is your favourite type of movie and why?",
    "What is your favourite song and who sings it?",
    "What is your favourite school subject and why?",
    "What season do you like best and why?",
    "Do you like K-pop?",
    "Which do you like better, cats or dogs?",
    "What kind of person do you like?",
    "How many hours of sleep do you usually get a night?",
    "What do you usually shop for and where do you go shopping?",
    "What sports do you like and dislike? Why?",
    "How often do you watch TV?",
    "Who do you spend your free time with?",
    "Where do you want to travel too?",
    "If you win the lottery, what is the first thing you would do?",
    "Do you want to get married?",
    "Do you have any pets, if so, what are they?",
    "Would rather be very intelligent or very good-looking?",
    "If you had one wish, what would it be?",
    "What is your least favorite school subject?",
    "Would you rather live in the mountains or on the beach?",
    "What do you think about Aaron-sensei?",
    "What's your favorite videogame?",
    "What do you wish you were good at?",
    "Is there something you are bad at?",
    "What's a surprising fact about yourself?",
    "Who is your favorite superhero?",
    "Would you rather have no arms or no legs?",
    "Would you rather be a superhero or a super villain?",
    "What is your dream?"
]

function displayRandomTopic() {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    console.log(randomNumber);
    document.getElementById("topic").innerHTML = randomTopics[randomNumber]
}

displayRandomTopic();