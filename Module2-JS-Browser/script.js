let blocks = document.getElementsByClassName('block');

Array.from(blocks).forEach(element => {
  element.addEventListener("click", {handleEvent: logColor, el: element});
});

function logColor() {
  let blockId = Array.from(this.el.id);
  let color = blockId.splice(0, blockId.length - 6).join('').toUpperCase();

  console.log(`You clicked on ${color}!`);
}