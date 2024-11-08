const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.Card.createMany({
            data: [
                    {
                    prompt:"The Fool",
                    Answer:"Upright: innocence, new beginnings, free spirit",
                    AnswerReversed: "Reversed: recklessness, taken advantage of, inconsideration",
                    image:"/Images/ar00.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Magician",
                    Answer:"Upright: willpower, desire, creation, manifestation",
                    AnswerReversed: "Reversed: trickery, illusions, out of touch",
                    image:"/Images/ar01.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The High Priestess",
                    Answer:"Upright: intuitive, unconscious, inner voice",
                    AnswerReversed: "Reversed: lack of center, lost inner voice, repressed feelings",
                    image:"/Images/ar02.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Empress",
                    Answer:"Upright: motherhood, fertility, nature",
                    AnswerReversed: "Reversed: dependence, smothering, emptiness, nosiness",
                    image:"/Images/ar03.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Emperor",
                    Answer:"Upright: authority, structure, control, fatherhood",
                    AnswerReversed: "Reversed: tyranny, rigidity, coldness",
                    image:"/Images/ar04.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Hierophant",
                    Answer:"Upright: tradition, conformity, morality, ethics",
                    AnswerReversed: "Reversed: rebellion, subversiveness, new approaches",
                    image:"/Images/ar05.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Lovers",
                    Answer:"Upright: partnerships, duality, union",
                    AnswerReversed: "Reversed: loss of balance, one-sidedness, disharmony",
                    image:"/Images/ar06.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Chariot",
                    Answer:"Upright: direction, control, willpower",
                    AnswerReversed: "Reversed: lack of control, lack of direction, aggression",
                    image:"/Images/ar07.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Strength",
                    Answer:"Upright: inner strength, bravery, compassion, focus",
                    AnswerReversed: "Reversed: self doubt, weakness, insecurity",
                    image:"/Images/ar08.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Hermit",
                    Answer:"Upright: contemplation, search for truth, inner guidance",
                    AnswerReversed: "Reversed: loneliness, isolation, lost your way",
                    image:"/Images/ar09.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Wheel of Fortune",
                    Answer:"Upright: change, cycles, inevitable fate",
                    AnswerReversed: "Reversed: no control, clinging to control, bad luck",
                    image:"/Images/ar10.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Justice",
                    Answer:"Upright: cause and effect, clarity, truth",
                    AnswerReversed: "Reversed: dishonesty, unaccountability, unfairness",
                    image:"/Images/ar11.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Hanged Man",
                    Answer:"Upright: sacrifice, release, martyrdom",
                    AnswerReversed: "Reversed: stalling, needless sacrifice, fear of sacrifice",
                    image:"/Images/ar12.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Death",
                    Answer:"Upright: end of cycle, beginnings, change, metamorphosis",
                    AnswerReversed: "Reversed: fear of change, holding on, stagnation, decay",
                    image:"/Images/ar13.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Temperance",
                    Answer:"Upright: middle path, patience, finding meaning",
                    AnswerReversed: "Reversed: extremes, excess, lack of balance",
                    image:"/Images/ar14.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Devil",
                    Answer:"Upright: addiction, materialism, playfulness",
                    AnswerReversed: "Reversed: freedom, release, restoring control",
                    image:"/Images/ar15.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Tower",
                    Answer:"Upright: sudden upheaval, broken pride, disaster",
                    AnswerReversed: "Reversed: disaster avoided, delayed disaster, fear of suffering",
                    image:"/Images/ar16.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Star",
                    Answer:"Upright: hope, faith, rejuvenation",
                    AnswerReversed: "Reversed: faithlessness, discouragement, insecurity",
                    image:"/Images/ar17.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Moon",
                    Answer:"Upright: unconscious, illusions, intuition",
                    AnswerReversed: "Reversed: confusion, fear, misinterpretation",
                    image:"/Images/ar18.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The Sun",
                    Answer:"Upright: joy, success, celebration, positivity",
                    AnswerReversed: "Reversed: negativity, depression, sadness",
                    image:"/Images/ar19.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"Judgment",
                    Answer:"Upright: reflection, reckoning, awakening",
                    AnswerReversed: "Reversed: lack of self awareness, doubt, self loathing",
                    image:"/Images/ar20.jpg",
                    difficulty:3,
                    scheduledTime:0},
                
                    {
                    prompt:"The World",
                    Answer:"Upright: fulfillment, harmony, completion", 
                    AnswerReversed: "Reversed: incompletion, no closure",
                    image:"/Images/ar21.jpg",
                    difficulty:3,
                    scheduledTime:0},
            ],
            skipDuplicates: true
        })
        
}


seed()