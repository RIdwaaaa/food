// show create account and login buttons
const toggleBtn = document.getElementById('toggle-btn')
const accountBtns = document.querySelector('.account-btns')
toggleBtn.addEventListener('click', () => {
    accountBtns.classList.toggle('show-account-btns')
})

window.addEventListener('DOMContentLoaded', ()=> {
    displayMenuItems(allMenuItems)
    renderSpecialItems()
})

// display menu items
const allMenuItems = [
    {
        category: "main-dish",
        img: "img/item1.jpeg",
        itemName: "Kentucky Fried Chicken",
        price: "700",
        description: "Thsi chicken is fried soooo nice to leave your mouth yearning for more"
    },

    {
        category: "snacks",
        img: "img/item2.jpg",
        itemName: "African fries",
        price: "100",
        description: "This potato fries made from the finest potatoes from the finest Kinangop constituency"
    },

    {
        category: "drinks",
        img: "img/item3.jpeg",
        itemName: "Sugarless coke",
        price: "70",
        description: "The perfect cold beverage to quench your thirst"
    },

    {
        category: "drinks",
        img: "img/item4.jpeg",
        itemName: "Capuchino coffee",
        price: "250",
        description: "Feeling fatigued,, well this is the drink for you"
    },

    {
        category: "snacks",
        img: "img/item5.jpeg",
        itemName: "Coastal Mahamri",
        price: "300",
        description: "If this aint the best breakfast snack, i dont know what is"
    },

    {
        category: "main-dish",
        img: "img/item6.jpeg",
        itemName: "Fried rice",
        price: "400",
        description: "Just suppliment this dish with some chicken and some cold drink and believe you me, you'll spend the rest of the smiling"
    },

    {
        category: "snacks",
        img: "img/item7.jpeg",
        itemName: "Yakuzas Icecream",
        price: "70",
        description: "Each lick feels better than the last one, made from natural ingredientss, you will love it"
    },

    {
        category: "main-dish",
        img: "img/item8.jpeg",
        itemName: "African cake(Ugali)",
        price: "200",
        description: "Served with some beef and sukuma prepared with the African love this African dish requires "
    },

    {
        category: "drinks",
        img: "img/item9.jpeg",
        itemName: "Yoyo yoghurt",
        price: "150",
        description: "Delicious!!!!! just delicious, just get yourself one of this mamacitas!!"
    },

    {
        category: "snacks",
        img: "img/item10.jpeg",
        itemName: "Manji biscuits",
        price: "30",
        description: "Perfect snack to compliment you coffe or sssome hot milk"
    },

    {
        category: "snacks",
        img: "img/item11.jpeg",
        itemName: "Fruit Pudding",
        price: "450",
        description: "Some ofthe best of what mother-nature has to offer all served under one plate"
    },

    {
        category: "main-dish",
        img: "img/item12.jpeg",
        itemName: "Pilau",
        price: "375",
        description: "Will leave you thanking the coastal people for inventing such a beautiful meal"
    },

    {
        category: "drinks",
        img: "img/item13.jpeg",
        itemName: "Four cousins red wine",
        price: "1300",
        description: "Well, its red wine!!! what do I have to say except,,,,,,ENJOY EVERY SIP!!!"
    },

    {
        category: "main-dish",
        img: "img/item14.jpeg",
        itemName: "Chinese Special",
        price: "250",
        description: "Evil laugh: hahahaaaa hehehe huuuuuuu hahahahahah"
    },

    {
        category: "snacks",
        img: "img/item15.jpeg",
        itemName: "Chocolate cake",
        price: "900",
        description: "At this point am out of content i just wanna fill up my Array"
    },

    {
        category: "special",
        img: "img/valentine.jpg",
        itemName: "Valentine Dinner",
        price: "1500",
        description: "Delcious way to celebrate your loved one."
    },

    {
        category: "special",
        img: "img/christmas.jpg",
        itemName: "Christmas Dinner",
        price: "2500",
        description: "Christmas in your mouth"
    }
]

const menuItems = document.querySelector('.menu-items')
// display items function
function displayMenuItems(items) {
    const renderItems = items.map(function(item) {
        return `<div class="item">
                <div class="item-img">
                    <img src=${item.img} alt="">
                </div>
                <div class="item-title-price">
                    <h4>${item.itemName}</h4>
                    <h4 class="price">Ksh <span>${item.price}</span></h4>
                </div>
                <div class="item-description">
                    <p>${item.description}</p>
                </div>
                <div class="order-btn">
                    <input type="button" value="Order" class="order-button">
                </div>
            </div>`
    }).join("")

    menuItems.innerHTML = renderItems
}

// filter out items according to categories
const filterBtns = document.querySelectorAll('.filter-btn')
const categoryTitle = document.getElementById('category-title')
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const clickedBtn = e.currentTarget.dataset.category
        const filterItems = allMenuItems.filter(function(item) {
            if(clickedBtn === item.category) {
                categoryTitle.textContent = `${item.category}`
                return item
            }
        })
        displayMenuItems(filterItems)
        menuItems.style.justifyContent = "center"
        specialItemsSection.style.display = "none"
    })
})


// special items function
const specialItemsSection = document.querySelector('.special-items-section')
function renderSpecialItems() {
    const specialItems = allMenuItems.reduce(function(values, item) {
        if(item.category === "special") {
            values.push(item)
        }
        return values
    }, [])
    
    const displaySpecialItems = specialItems.map(function(item) {
        return `<div class="item">
                    <div class="item-img">
                        <img src=${item.img} alt="">
                    </div>
                    <div class="item-title-price">
                        <h4>${item.itemName}</h4>
                        <h4 class="price">Ksh <span>${item.price}</span></h4>
                    </div>
                    <div class="item-description">
                        <p>${item.description}</p>
                    </div>
                    <div class="order-btn">
                        <input type="button" value="Order" class="order-button">
                    </div>
                </div>`
    }).join("")
    specialItemsSection.innerHTML += displaySpecialItems
}