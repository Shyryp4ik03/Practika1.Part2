const words = [                                                 
  "попугай",
  "обезьяна",
  "микроконтроллер",
  "вода",
  "велосипед",
  "костыли",
];

const word = words[Math.floor(Math.random()*words.length)]; // рандомно загадывается слово


let solutArray = []; // создается массив и заполняется, неотгаданные буквы - звёздочки
for (let i = 0; i < word.length; i++){
  solutArray[i] = " * ";
}

let remLetters = word.length; // количество букв, которое надо угадать
let newRemainigLetters = remLetters; // создается доп переменную, для проверки оставшихся букв
let lives = 5; // количество жизней

while ((remLetters > 0) && (lives !== 0)){
  // приветственное окно
  alert("Добро пожаловать в игру 'Виселица. '" + "\n" +"Вы имеете " + lives +  " жизней. " + "\n" + "Слово для разгадывания:  " + solutArray.join(" ")); 

  // Запрашиваем букву
  let guess = prompt("Угадайте букву или нажмите ОТМЕНА, чтобы закончить игру");

  // Проверяем подходят ли введенные данные
  if (guess === null){
      break;
  } else if (guess.length !== 1) {
      alert("Пожалуйста, введите только ОДНУ букву ")
  } else {
      guess = guess.toLowerCase();
      for (let j = 0; j < word.length; j++) {

          // Проверяем есть ли буква среди уже угаданных
          if (solutArray[j] === guess) {
              alert("Извините, эта буква уже есть. Попробуйте другую ")
              break;
          }
          // Проверяем угадали ли букву
          if(word[j] === guess){
            solutArray[j] = guess;
          remLetters--;
          }               
      }
  }

  // Проверяем, уменьшилось ли количество оставшихся букв, которые надо отгадать
  if (remLetters === newRemainigLetters) {
      lives--;            
  }
  // Обновляем  доп переменную с количеством оставшихся букв
  newRemainigLetters = remLetters;
} 
// развязка после цикла
if (lives === 0) {
  alert("Ваши жизни закончились. Загаданное слово: " + word);
  window.close();
} else if(remLetters === 0){
  alert("Вы победили! Загаданное слово: " + word);
  window.close();
} 

