// Deliverables
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
// - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart

// Instructions
// - Use this template as a starting point => https://codesandbox.io/s/day-11-grocero-template-j2yis
// - again, ples don't code in codesandbox
// - Create a state object
// - Create action functions that update state
// - Create render functions  that read from state and update the visuals

// Tips
// - Start with the logic first, use console.log(state) to check your logic is working; when the logic is working as expected move onto styling
// - Taking HTML semantics into consideration, use a button when an action is happening on the same page


// Challenges
// - Create a json-server, and make your app persist the data 
// - Add filters to the store ie. filter by item type; when a user clicks a filter they will only see items of that type
// - Add sorting to the store ie. sort by price or sort alphabetically; when a user clicks sort they will see a sorted list of items


/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/


let state = {
    items: [{
            id: 1,
            name: "Beetroot",
            imageSrc: "/assets/icons/001-beetroot.svg",
            price: 0.75,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 2,
            name: "Carrot",
            imageSrc: "/assets/icons/002-carrot.svg",
            price: 0.50,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 3,
            name: "Apple",
            imageSrc: "/assets/icons/003-apple.svg",
            price: 0.30,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 4,
            imageSrc: "/assets/icons/004-apricot.svg",
            name: "Apricot",
            price: 0.95,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 5,
            imageSrc: "/assets/icons/005-avocado.svg",
            name: "Avocado",
            price: 0.80,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 6,
            imageSrc: "/assets/icons/006-bananas.svg",
            name: "Banana",
            price: 0.35,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 7,
            name: "Bell pepper",
            imageSrc: "/assets/icons/007-bell-pepper.svg",
            price: 0.95,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 8,
            name: "Berry",
            imageSrc: "/assets/icons/008-berry.svg",
            price: 1,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 9,
            name: "BlueBerry",
            imageSrc: "/assets/icons/009-blueberry.svg",
            price: 1.2,
            amount: 0,
            itemTotalPrice: 0
        },
        {
            id: 10,
            name: "Eggplant",
            imageSrc: "/assets/icons/010-eggplant.svg",
            price: 0.65,
            amount: 0,
            itemTotalPrice: 0
        }
    ],
    totalPrice: 0
}

// Helper Functions
// Add items to cort


function addItemToCart(item) {
    item.amount++
}

// Remove Items from cart
function removeItemFromCart(item) {
    if (item.amount > 0) {
        item.amount--
    }
}

function totalAmount() {
    state.totalPrice = 0

    for (const item of state.items) {
        state.totalPrice += item.price * item.amount
    }

    const totalAmountNumber = document.querySelector('.total-number')
    totalAmountNumber.textContent = `£${state.totalPrice}`
}
// Render Functions

function renderShopItems() {
    const storeList = document.querySelector('.store--item-list')
    storeList.innerHTML = ""

    for (const item of state.items) {
        const liEl = document.createElement('li')
        const storeItemIconDiv = document.createElement('div')
        const itemIcon = document.createElement('img')
        const addToCartButton = document.createElement('button')


        itemIcon.setAttribute('src', item.imageSrc)
        itemIcon.setAttribute('alt', item.name)

        storeItemIconDiv.setAttribute('class', 'store--item-icon')
        storeItemIconDiv.append(itemIcon)

        addToCartButton.setAttribute('class', 'add-to-cart-button')
        addToCartButton.textContent = "Add to cart"

        addToCartButton.addEventListener('click', () => {
            addItemToCart(item)
            render()
            console.log(state)
        })

        liEl.append(storeItemIconDiv, addToCartButton)
        storeList.append(liEl)
    }
}



function render() {
    totalAmount()
    renderShopItems()

}
render()

// Event Listener Functions