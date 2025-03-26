const words = ["Data Analyst", "Data Engineer", "Data Scientist", "Data Steward"];  // Words to replace
const wordElement = document.getElementById("word");

let currentIndex = 0;

function typeEffect() {
  const currentWord = words[currentIndex];
  const nextWord = words[(currentIndex + 1) % words.length];

  // Delete the current word letter by letter
  let i = currentWord.length;
  const deleteInterval = setInterval(() => {
    wordElement.textContent = currentWord.slice(0, i);
    i--;
    
    if (i < 0) {
      clearInterval(deleteInterval);

      // Type the new word letter by letter
      let j = 0;
      const typeInterval = setInterval(() => {
        wordElement.textContent = nextWord.slice(0, j + 1);
        j++;

        if (j > nextWord.length) {
          clearInterval(typeInterval);
          currentIndex = (currentIndex + 1) % words.length;

          // Restart the effect
          setTimeout(typeEffect, 1000);
        }
      }, 150);
    }
  }, 150);
}

// Start the effect
typeEffect();
