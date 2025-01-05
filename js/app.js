//JavaScript

(() => {
    "use strict";
    const body = document.querySelector("body");
    const newQuote = document.getElementsByClassName("quote")[0];
    const newAuthor = document.getElementsByClassName("author")[0];
  
    // In quoteArr[i], even index is a quote,
    // the following index is the author.
    
    const quoteArr = [
      "Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.",
      "Jesus Christ",
      "If you can’t explain it simply, you don’t understand it well enough.",
      "Albert Einstein",
      "You have power over your mind—not outside events. Realize this, and you will find strength.",
      "Marcus Aurelius",
      "In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.",
      "Douglas Crockford",
      "WHEN a man does not know what harbor he is making for, no wind is the right wind.",
      "first-century Roman philosopher",
      "The one walking with the wise will become wise, But the one who has dealings with the stupid will fare badly.",
      "Proverbs 13:20",
      "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ ... I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
      "Charles Babbage",
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.",
      "C.A.R. Hoare, 1980 ACM Turing Award Lecture",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "Brian Kernighan and P.J. Plauger, The Elements of Programming Style",
      "When you cut against the grain of the wood, much strength is needed. When you program against the grain of the problem, much code is needed.",
      "Master Yuan-Ma, The Book of Programming",
      "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.", 
      "Stan Kelly-Bootle",
      "Syntactic sugar causes cancer of the semicolon.",
      "Alan Perlis, 1982",
      "An algorithm is a finite answer to an infinite number of questions.",
      "Attributed to Stephen Kleene.",
      "The importance of the universal machine is clear. We do not need to have an infinity of different machines doing different jobs. … The engineering problem of producing various machines for various jobs is replaced by the office work of ‘programming’ the universal machine.",
      "Alan Turing, 1948",
      "Human ingenuity cannot concoct a cipher which human ingenuity cannot resolve.",
      "Edgar Allen Poe, 1841",
      "Let’s not try to define knowledge, but try to define zero-knowledge.",
      "Shafi Goldwasser"
    ];
  
    let currentQuote = 0;
  
    newQuote.textContent = quoteArr[currentQuote];
    newAuthor.textContent = quoteArr[currentQuote + 1];
  
    body.addEventListener("click", () => {
      currentQuote = (currentQuote + 2) % quoteArr.length;
      newQuote.textContent = quoteArr[currentQuote];
      newAuthor.textContent = quoteArr[currentQuote + 1];
    });
  })();
  