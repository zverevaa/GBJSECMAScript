// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1,
// а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (counter) => {
  const newObject = {
    increment() {
      counter += 1;
      return newObject;
    },
    decrement() {
      counter -= 1;
      return newObject;
    },
    valueOf() {
      return counter;
    },
  };
  return newObject;
};
const counter = createCounter(10);
console.log(+counter.decrement().decrement());
