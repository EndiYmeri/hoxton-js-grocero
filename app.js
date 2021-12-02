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
        name: beetroot,
        price: 0.75,
        amount: 1,
    }],
    totalPrice: 0.75
}