const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
  // Якщо не збігається, то на цій ітерації нічого не робимо
}

console.log(message);
