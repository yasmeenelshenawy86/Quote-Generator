var quotes = [
  "“Life isn\’t about finding yourself. Life is about creating yourself.”― George Bernard Shaw",
  "“Keep your face always toward the sunshine, and shadows will fall behind you.” \– Walt Whitman",
  "“The most important thing in life is to stop saying \‘I wish\’ and start saying \‘I will\’. Consider nothing impossible then treat possibilities as probabilities.” -Charles Dickens",
  "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi",
  "“All our dreams can come true if we have the courage to pursue them.”- Walt Disney",
  "“Let us make our future now, and let us make our dreams tomorrow\’s reality.” \–  Malala Yousafzai",
  "“The best way to get started is to quit talking and begin doing.” ― Walt Disney",
  "You define your own life. Don\’t let other people write your script.” — Oprah Winfrey",
  "“Life is like riding a bicycle. To keep your balance, you must keep moving.”― Albert Einstein",
  "“For every reason it\’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.” \– Jack Canfield",
  "“My best friend is the one who brings out the best in me.” — Henry Ford",
  "“If you are working on something that you really care about, you don\’t have to be pushed. The vision pulls you.”\– Steve Jobs",
  "“The only way to do great work is to love what you do. If you haven\’t found it yet, keep looking. Don\’t settle.” \– Steve Jobs",
  "“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.” \– Brian Tracy",
  "“What you lack in talent can be made up with desire, hustle and giving 110% all the time.” \– Don Zimmer",
  "“Be the change that you wish to see in the world.”― Mahatma Gandhi",
  "“Don\’t walk in front of me… I may not follow Don\’t walk behind me… I may not lead Walk beside me… just be my friend” ― Albert Camus"
];

function quotesGen() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}


