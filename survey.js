const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let feedback = '';

rl.question("What's your name? Nicknames are also acceptable :",answer => { feedback += `What's your name? Nicknames are also acceptable : ${answer}` + "\n";
  rl.question("What's an activity you like doing?", answer => {
    feedback += `What's an activity you like doing?: ${answer}` + "\n";
    rl.question("What do you listen to while doing that?", answer => {
      feedback += `What do you listen to while doing that?: ${answer}` + "\n";
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", answer => { feedback += `Which meal is your favourite (eg: dinner, brunch, etc.): ${answer}` + "\n";
        rl.question("What's your favourite thing to eat for that meal?", answer => { feedback += `What's your favourite thing to eat for that meal?: ${answer}` + "\n";
          rl.question("Which sport is your absolute favourite?", answer => { feedback += `Which sport is your absolute favourite?: ${answer}` + "\n";
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ", answer => {
              feedback += `What is your superpower? In a few words, tell us what you are amazing at!: ${answer}` + "\n";
              console.log(`Thank you for your valuable feedback: ${feedback}`);
              rl.close();
            });
          });
        });
      });
    });
  });
}); 

