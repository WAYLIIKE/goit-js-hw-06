const categories = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.childElementCount}`);

itemList.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li").length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
