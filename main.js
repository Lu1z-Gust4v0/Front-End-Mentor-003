const spans = document.querySelectorAll("span");
const items = document.querySelectorAll("div.item")
const icons = document.querySelectorAll(".icon-arrow")

for (let i in items){
	spans[i].addEventListener("click", () => {	
		icons[i].style.rotate = "0deg"
		items[i].classList.toggle("active")

		if (items[i].classList[1] === "active"){
				icons[i].style.rotate = "180deg"
		} 
	})

	icons[i].addEventListener("click", () => {
		icons[i].style.rotate = "0deg"
		items[i].classList.toggle("active")

		if (items[i].classList[1] === "active"){
				icons[i].style.rotate = "180deg"
		} 
	})
}