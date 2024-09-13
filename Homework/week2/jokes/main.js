let jokeBundle = `My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.
I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.
What do you call a sheep who can sing and dance? Lady Ba Ba.
What do you call a French man wearing sandals? Philipe Fallop.
Why can't dinosaurs clap their hands? Because they're extinct.
I gave my handyman a to-do list, but he only did jobs 1, 3, and 5. Turns out he only does odd jobs.
Why should you never take sides in an argument at the dinner table? Trick question. It's the perfect time to take sides because no one's paying attention. Bring Tupperware.
Who won the neck decorating contest? It was a tie.
Where do rainbows go when they've been bad? To prism, so they have time to reflect on what they've done.
Dogs can't operate MRI machines. But catscan.
What do mermaids use to wash their fins? Tide.
What did the skillet eat on its birthday? Pan-cakes.
Why couldn't the produce manager make it to work? He could drive, but he didn't avocado.
I went to a silent auction. I won a dog whistle and two mimes.
How is my wallet like an onion? Every time I open it, I cry.
What do you call a dog who meditates? Aware wolf.
What kind of fish do penguins catch at night? Star fish.
Which vegetable has the best kung fu? Broc-lee.
Can a frog jump higher than a house? Of course, a house can't jump.
I was going to try an all almond diet, but that's just nuts.
I once submitted 10 puns to a joke competition. I really thought with that many, one was sure to be a winner. Sadly, no pun in ten did.
Why did the old man fall down the well? He couldn’t see that well.
I tried to make up a joke about ghost but I couldn't. It had plenty of spirit but no body.
Dad: What is the difference between a piano, a tuna, and a pot of glue? Me: I don't know. Dad: You can tuna piano but you can't piano a tuna. Me: What about the pot of glue? Dad: I knew you'd get stuck on that.
Two windmills were sitting on a hill. One asks the other, "Do you have a favorite song?" The other replies, "Well... all my life I have been a heavy metal fan."
Today at the bank, an old lady asked me to check her balance... So I pushed her over.
I got an A on my origami assignment when I turned my paper into my teacher.
How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side.
If your house is cold, just stand in the corner. It’s always 90 degrees there.
Hi, I’m Cliff. Drop over sometime.
Did you hear about the guy who went to the doctor for a headache? The doctor examined his ear and found money. The doctor kept pulling and pulling it out until he had $1,999. Then the doctor said, "No wonder you're not feeling two grand!"
Dad, when he puts the car in reverse: "Ah, this takes me back."
What do you call the security guards for Samsung? Guardians of the galaxy.
I was making a joke about retirement. It did not work.
The other day I bought a thesaurus, but when I got home and opened it, all the pages were blank. I have no word to describe how angry I am.
The owner of the tuxedo store kept hovering over me when i was browsing, so I asked him to leave me alone. He said, “Fine, suit yourself.”
Why did the egg have a day off? Because it was Fryday.
Have you ever heard about the kidnapping at school? It's okay, he woke up.
I found a book called How to Solve 50% of Your Problems. So I bought 2.
Why did the coffee taste like dirt? Because it was ground just a few minutes ago.
Why did the Rolling Stones stop making music? Because they got to bottom of the hill.
What is the best present? Broken drums! You can't beat them.
I made song about tortilla once, now it's more like a wrap.
Did you know courdury pillows are in style? They're making headlines.
What does a nosey pepper do? It gets jalapeño business.
Did you hear about the fragile myth? It was busted.
What word can you make shorter by adding two letters? Short.
What do call a criminal landing an airplane? Condescending.
I stayed up all night wondering where the sun went, and then it dawned on me.
Why do people who live in Greece hate waking up at dawn? Because Dawn is tough on Greece.
How do you make holy water? You boil the hell out of it.
Justice is a dish best served cold. Otherwise, it's just water.
Why should you never throw grandpa's false teeth at a vehicle? You might denture car.
Why are Christmas trees bad at knitting? They always drop their needles.
What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.
What do you do to have a space party? You planet.
Why couldn’t the tree get on his computer? Because he could not log on.
What's a skeleton's favorite type of road? A dead end.
What did the grape say when it got stepped on? Nothing, just a little wine.
What did the alien say to the landscaper? Take me to your weeder.
Me: “I want to write when I grow up.” Dad: “Why don’t you left instead?”
How many apples grow on an apple tree? All of them.
What did Elvis say to his landscaper? Thank you for the mulch!
Why didn't the lifeguard save the hippie? He was too far out!
What did the mother broom say to the baby broom? Time to go to sweep.
The other day I was attacked by a bunch of circus clowns in a parking lot. I won though, cause I went right for the juggler.
I'd like to shout out sidewalks for keeping me off the streets.
What did the computer go to the doctor? Because he had a virus.
How many ears does Captain Kirk have? Three. The left ear, the right ear, and the final front-ear.
Did you hear about the famous pickle? He's a really big dill.
I went on Amazon to buy a lighter but all they had were 3,472 matches.
What do you need to make a highway in an art studio? A mile marker.
How does Vin Diesel keep in touch with the Fast and Furious crew? On a Zoom call.
What has four wheels and flies? A garbage truck.
How much does a chimney cost. Nothing, it's on the house.
Why do only some couples go to the gym? Because some relationships don't work out.
You don't need a parachute to go skydiving. You need one to go skydiving twice.
How do you make 7 even? Take away the S.
Why is sausage bad for you? It brings out the Wurst in people.
What do you call a broken clock? A waste of time.
Why did the teddy bear turn down a slice of cake. He was stuffed.
What's an astronaut's favorite board game? Moon-opoly
How do you make Budweiser? Send him to school.
What is Santa’s favorite state to visit? Ida Ho Ho Ho
Have you seen those traffic circles or driven around them? Well, they are pointless.
Why can’t you hear a pterodactyl go to the bathroom? The P is silent.`;

const headline = document.getElementById("headline");
const mainText = document.getElementById("mainText");
const randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener('click', onClickRandom);

let jokes = jokeBundle.split("\n");
function getRandom(upTo){
    return Math.floor(Math.random() * upTo);
}

function onClickRandom(){
    let i = getRandom(jokes.length - 1);
    headline.textContent = `Joke #${i}`;
    mainText.textContent = jokes[i];
}

onClickRandom();