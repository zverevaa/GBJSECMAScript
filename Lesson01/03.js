// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и
// название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

// let rootElement = document.querySelector(":root");
const rootElement = document.getElementById("root");

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  if (rootElement.children.length === 0) {
    return;
  }
  for (const child of rootElement.children) {
    const element = findElementByClass(child, className);
    if (element) {
      return element;
    }
  }
}

console.log(findElementByClass(rootElement, "class1"));
