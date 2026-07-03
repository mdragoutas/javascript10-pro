// Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα
const totalSeconds = 75;
const secondsInMinute = 60;

const minutes = Math.floor(totalSeconds / secondsInMinute);
const seconds = totalSeconds % secondsInMinute;

if (totalSeconds > secondsInMinute) {
    console.log(`${totalSeconds} seconds is equal to ${minutes} minutes and ${seconds} seconds`)
}