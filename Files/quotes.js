const happyQuotes = [
    {
        quote: "The only way to be happy is to enjoy what you have and make the best of it.",
        author: "Unknown"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "Happiness is a journey, not a destination.",
        author: "Ben Sweetland"
    },
    {
        quote: "The secret of being happy is accepting where you are in life and making the most out of every day.",
        author: "Unknown"
    },
    {
        quote: "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is.",
        author: "Mandy Hale"
    },
    {
        quote: "Count your age by friends, not years. Count your life by smiles, not tears.",
        author: "John Lennon"
    },
    {
        quote: "The happiest people don't have the best of everything, they make the best of everything.",
        author: "Unknown"
    },
    {
        quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
        author: "Audrey Hepburn"
    },
    {
        quote: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "There are so many beautiful reasons to be happy.",
        author: "Unknown"
    },
    {
        quote: "The sun always shines above the clouds.",
        author: "Paul F. Davis"
    },
    {
        quote: "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.",
        author: "Ralph Marston"
    },
    {
        quote: "Do what makes your soul shine.",
        author: "Unknown"
    },{
        quote: "Every day may not be good, but there is something good in every day.",
        author: "Unknown"
    },
    {
        quote: "Happiness comes when we stop complaining about the troubles we have and offer thanks for all the troubles we don't have.",
        author: "Unknown"
    },
    {
        quote: "Smile often, think positively, give thanks, laugh loudly, love others, dream big.",
        author: "Unknown"
    },
    {
        quote: "Be so happy that when others look at you, they become happy too.",
        author: "Unknown"
    },
    {
        quote: "Life is better when you're laughing.",
        author: "Unknown"
    },
    {
        quote: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        author: "William Saroyan"
    },
    {
        quote: "Happiness is not about getting all you want, it is about enjoying all you have.",
        author: "Unknown"
    },
    {
        quote: "You have the right to live a beautiful life.",
        author: "Selena Gomez"
    },
]

const sadQuotes = [
    {
        quote: "Life can be heavy, especially if you try to carry it all at once.",
        author: "Taylor Swift"
    },
    {
        quote: "There is one person you can truly rely on, that person is you.",
        author: "Kendra White"
    },    
    {
        quote: "Never be so kind, you forget to be clever. Never be so clever, you forget to be kind.",
        author: "Taylor Swift"
    },
    {
        quote: "You are not damages from your mistakes, you are wiser.",
        author: "Taylor Swift"
    },
    {
        quote: "Long story short, it was a bad time. Long story short, i survived.",
        author: "Taylor Swift"
    },
    {
        quote: "Time is taking its sweet time erasing you.",
        author: "Taylor Swift"
    },
    {
        quote: "You can't carry all things, all grudges, all updates on your ex, all enviable promotions your school bully got at the hedge fund his uncle started. Decide what is yours to hold and let the rest go",
        author: "Taylor Swift"
    },
    {
        quote: "Never be ashamed of trying, effortlessness is a myth.",
        author: "Taylor Swift"
    },
    {
        quote: "I'm trying to tell you that losing things doesn't just mean losing. At lot of times, when we lose things, we gain things too.",
        author: "Taylor Swift"
    },
    {
        quote: "You are not the opinions of someone who doesn't know you. You are not damaged goods because of the mistakes you've made.",
        author: "Taylor Swift"
    },
    {
        quote: "Part of growing up and moving into new chapters of your life is about catch and release. What i mean by that is, knowing what things to keep, and what things to release.",
        author: "Taylor Swift"
    },
    {
        quote: "When writing the story of your life, don't let anyone else hold the pen.",
        author: "Drake"
    },
    {
        quote: "Anyway, hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it.",
        author: "Taylor Swift"
    },
    {
        quote: "Life can always cahnge, you have to adjust.",
        author: "Drake"
    },
    {
        quote: "Never look back. If Cinderella had looked back and picked up the show she would have never found her prince.",
        author: "Selena Gomez"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "Sometimes the road less travelled is the road best left behind.",
        author: "Adele"
    },
    {
        quote: "Before you give up, think of the reason you held on so long.",
        author: "Drake"
    },
    {
        quote: "Some endings become better beginnings.",
        author: "Edward Lee"
    },
    {
        quote: "I don't forgive people because i'm weak, i forgive them becuase i am strong enough to know people make mistakes.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Always, always,  always believe in yourself, because if you don't then who will, sweetie?",
        author: "Marilyn Monroe"
    },
    {
        quote: "Beginnings are usually scary, and endings are usually sad, but its everything in between that makes it all worth living.",
        author: "Bob Marley"
    },
    {
        quote: "You don't always get the closure you want, but you will always get the outcome you need. Everything happens for a reason. Everything that hurts shall pass.",
        author: "r. m. drake"
    },
    {
        quote: "Nobody said it would last forever.",
        author: "Lewis Capaldi, Forever"
    },
    {
        quote: "Sometimes good things fall apart so better things can fall together.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Tables turn, bridges burn, you live and learn.",
        author: "Drake"
    },
]

const angryQuotes = [
    {
        quote: "It's cool, Breaking the rules.",
        author: "Cravity, from Break All The Rules"
    },
    {
        quote: "Whatever they decided i couldn't do? It's exactly what i did.",
        author: "Taylor Swift"
    },
    {
        quote: "Never believe anyone who says you don't deserve what you want.",
        author: "Taylor Swift"
    },
    {
        quote: "You can't be afraid of what people are going to say, because you're never going to make everyone happy.",
        author: "Selena Gomez"
    },
    {
        quote: "If you're gonna be two-faced at least make one of them pretty.",
        author: "Marilyn Monroe"
    },
    {
        quote: "I live to succeed, not to please you or anyone else.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Fear is stupid. So are regrets.",
        author: "Marilyn Monroe"
    },
    {
        quote: "I think it's really important that you don't think you're great. Because once you get to that point, you just fuck everything up. You think that everyone's going to think you're great all the time, and that's rubbish.",
        author: "Adele"
    },
    {
        quote: "I'm ballsy. I have guts. I'm not afraid of anyone. I think that's what makes me feel powerful.",
        author: "Adele"
    },
    {
        quote: "There's only one of you, so why wuold you want to look like everyone else? Why would you want to have the same hairstyle as everyone else and have the same opinions as everybody else?",
        author: "Adele"
    },
    {
        quote: "Through chaos as it swirls, It's us against the world.",
        author: "Coldplay"
    },
    {
        quote: "Life is so much easier when you don't hoard your past.",
        author: "Adele"
    },
    {
        quote: "Live fast. Die young. Be Wild. Have fun.",
        author: "Lana Del Rey"
    },
    {
        quote: "I choose me, i'm sorry.",
        author: "Kendrick Lamar"
    },
    {
        quote: "They mistook my kindness for weakness.",
        author: "Lana Del Rey"
    },
    {
        quote: "The feeling of being tired and wanting to give up is only just a moment and if we survive there, there are more beautiful days for us.",
        author: "Choi Beomgyu, of Tomorrow By Together"
    },
    {
        quote: "Don't push yourself away, you just need time.",
        author: "Grow up, by Stray Kids"
    },
    {
        quote: "Reality is always more cruel than our imagination but we are stronger than the person we imagine ourselves to be.",
        author: "Xu Minghao, of Seventeen"
    },
    {
        quote: "There's no one who worked harder than yourself. I wish you could be thankful towards yourself as well.",
        author: "Kim Hongjoong, of Ateez"
    },
    {
        quote: "Who are you to judge the life I live? I know I'm not perfect -and I don't live to be- but before you start pointing fingers... make sure you hands are clean!",
        author: "Bob Marley"
    },
    {
        quote: "Things change. And friends leave. Life doesn't stop for anybody.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quote: "Sometimes I can hear my bones straining under the weight of all the lives I'm not living.",
        author: "Jonathan Safran Foer, Extremely Loud & Incredibly Close"
    },
    {
        quote: "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.",
        author: "Nicholas Sparks, At First Sight"
    },
    {
        quote: "This life’s hard, but it’s harder if you’re stupid.",
        author: "George V. Higgins, The Friends of Eddie Coyle"
    },
    {
        quote: "If my life is going to mean anything, I have to live it myself.",
        author: "Rick Riordan, The Lightning Thief"
    },
]

const anxiousQuotes = [
    {
        quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
        author: "Willie Nelson"
    },
    {
        quote: "Oh, whatever tears you apart. Don't let it break your heart.",
        author: "Louis Tomlinsion"
    },
    {
        quote: "A good laugh is sunshine in the house.",
        author: "William Makepeace Thackeray"
    },
    {
        quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves"
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: "douglas adams, The Long Dark Tea-Time of the Soul"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Sometimes the questions are complicated and the answers are simple.",
        author: "Dr. Seuss"
    },
    {
        quote: "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
        author: "Dr. Seuss, Happy Birthday to You!"
    },
    {
        quote: "Sometimes people are beautiful. Not in looks. Not in wha they say. Just in what they are.",
        author: "Markus Zusak, I Am the Messenger"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Things change. And friends leave. Life doesn't stop for anybody.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quote: "The only way out of the labyrinth of suffering is to forgive.",
        author: "John Green, Looking for Alaska"
    },
    {
        quote: "We are what we pretend to be, so we must be careful about what we pretend to be.",
        author: "Kurt Vonnegut, Mother Night"
    },
    {
        quote: "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
        author: "Jimi Hendrix, The Jimi Hendrix Experience - Axis: Bold as Love"
    },
    {
        quote: "But better to get hurt by the truth than comforted with a lie.",
        author: "Khaled Hosseini"
    },
    {
        quote: "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.",
        author: "Nicholas Sparks, At First Sight"
    },
    {
        quote: "We're all human, aren't we? Every human life is worth the same, and worth saving.",
        author: "J.K. Rowling, Harry Potter and the Deathly Hallows"
    },
    {
        quote: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
        author: "Henry Wadsworth Longfellow"
    },
    {
        quote: "If you don't know where you're going, any road'll take you there",
        author: "George Harrison"
    },
    {
        quote: "Sometimes I can hear my bones straining under the weight of all the lives I'm not living.",
        author: "Jonathan Safran Foer, Extremely Loud & Incredibly Close"
    },
    {
        quote: "You cannot find peace by avoiding life.",
        author: "Michael Cunningham, The Hours"
    },
    {
        quote: "May you live every day of your life.",
        author: "Jonathan Swift"
    },
]

const calmQuotes = [
    {
        quote: "Learn to live alongside cringe. No matter how hard you try to avoid being cringe, you will look back on your life and cringe retrospectively. Cringe is unavoidable over a lifetime.",
        author: "Taylor Swift"
    },
    {
        quote: "My experience has been that my mistakes led to the best things in my life. And being embarassed when you mess up is part of the human experience.",
        author: "Taylor Swift"
    },
    {
        quote: "Make the most out of tonight, and worry about it all tomorrow.",
        author: "Drake"
    },
    {
        quote: "There will be times in life when you need to stand up for yourself. Times when the right thing is to back down and apologize. Times when the right thing is to turn and run. Times to hold on with all you have and times to let go with grace.",
        author: "Taylor Swift"
    },
    {
        quote: "The best is yet to come.",
        author: "Frank Sinatra"
    },
    {
        quote: "Always remember to smile and look up at what you got in life.",
        author: "Marilyn Monroe"
    },
    {
        quote: "Scary news is, you're on your own now. Cool news is you're on your own now.",
        author: "Taylor Swift"
    },
    {
        quote: "No matter what you look like, the key is to first of all be happy with yourself. And then you know if you want to try to improve things that you don't like about yourself, then do it after you appreciate yourself.",
        author: "Adele"
    },
    {
        quote: "Love the life you live, live the life you love.",
        author: "Bob Marley"
    },
    {
        quote: "Stay true to your authentic self.",
        author: "Stefania Spampinato"
    },
    {
        quote: "Live fast. Die young. Be wild. Have fun.",
        author: "Lana Del Rey"
    },
    {
        quote: "I feel likewe've made it pretty far, now we're star gazing.",
        author: "The neighbourhood"
    },
    {
        quote: "Give peace a chance, let the fear you have fall away.",
        author: "Lana Del Rey"
    },
    {
        quote: "Everything you lose is a step you take.",
        author: "Taylor Swift"
    },
    {
        quote: "All the pretty star shine for you, my love.",
        author: "Lana Del Rey"
    },
    {
        quote: "Aren't you way too busy taking care of everybody to take care of yourself?",
        author: "Conan gray"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        quote: "You cannot find peace by avoiding life.",
        author: "Michael Cunningham, The Hours"
    },
    {
        quote: "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.",
        author: "Nicholas Sparks, At First Sight"
    },
    {
        quote: "All the world is made of faith, and trust, and pixie dust.",
        author: "J.M. Barrie, Peter Pan"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King, Different Seasons"
    },
]

const motivatedQuotes = [
    {
        quote: "Never let success get to your head and never let failure get to your heart.",
        author: "Drake"
    },
    {
        quote: "Never wait for tomorrow, what if tomorrow never comes?",
        author: "Elvis Presely"
    },
    {
        quote: "Count your blessings, not problems.",
        author: "Drake"
    },
    {
        quote: "Some people feel the rain. Others just get wet.",
        author: "Bob Marley"
    },
    {
        quote: "Be in control. Know who you are. And don't try to be different just to be different.",
        author: "Bruno Mars"
    },
    {
        quote: "A wise girl knows her limits, a smart girl knows that she has none.",
        author: "Marilyn Monroe"
    },
    {
        quote: "I would rather die of passion than boredom.",
        author: "Van Gogh"
    },
    {
        quote: "If i'f observed all the rules, I'd never got anywhere.",
        author: "Marilyn Monroe"
    },
    {
        quote: "I live to succeed, not to please you or anyone else.",
        author: "Marilyn Monroe"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "A dream is only a dream, until you decide to make it real.",
        author: "Harry Styles"
    },
    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent Van Gogh"
    },
    {
        quote: "Even if the result don't come out as expected, don't ever hate yourself.",
        author: "For you, by Stray Kids"
    },
    {
        quote: "All dreams are within reach. All you have to do is keep moving towards them.",
        author: "Viola Davis"
    },
    {
        quote: "You can't knock on opportunity's door and not be ready.",
        author: "Bruno Mars"
    }, 
    {
        quote: "It's all about baby steps and trying to figure out how to slowly, elegantly become an adult.",
        author: "Selena Gomez"
    },
    {
        quote: "Let the sky fall, when it crumbles - We will stand tall - Face it all together.",
        author: "Adele"
    },
    {
        quote: "Everything will be okay in the end. If it's not okay, then it's not the end.",
        author: "John Lennon"
    },
    {
        quote: "The bigger that your career gets, the smaller your life gets.",
        author: "Adele"
    },
    {
        quote: "Be brave and fearless to know that even if you do make a wrong decision, you're making it for good reason.",
        author: "Adele"
    },
    {
        quote: "Nobody said it was easy, no one ever said it would be this hard.",
        author: "Coldplay, The Scientist"
    },
    {
        quote: "I believe in the person i want to become.",
        author: "Lana Del Rey"
    },
    {
        quote: "A winner is someone who gets up one more time when he is knocked down.",
        author: "B.I"
    },
    {
        quote: "You can't be good at everything, but that doesn't mean you can't do anything.",
        author: "Jeon Wonwoo, from Seventeen"
    },
    {
        quote: "When my little steps pile up, they will form a firm path one day.",
        author: "Woozi, from Seventeen"
    },
]

const randomQuotes = [
    {
        quote: "I'm not afraid of death; I just don't want to be there when it happens.",
        author: "Woody Allen"
    },
    {
        quote: "I failed as a person, i'm a dinosaur now.",
        author: "Unknown"
    },
    {
        quote: "I feel as useful as the 'P' in raspberry.",
        author: "Kevin Moon, of The Boyz"
    },
    {
        quote: "It's cool, Breaking the rules.",
        author: "Cravity, from Break All The Rules"
    },
    {
        quote: "There are so many books here, this is a place where i feel uncomfortable.",
        author: "Hyeongjun, of Cravity"
    },
    {
        quote: "My life like a fish.",
        author: "Choi Jiung,of P1HARMONY"
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
]