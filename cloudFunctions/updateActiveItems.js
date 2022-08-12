// Create a new table called "ActiveItem"
// Add Item when they are listed on the marketplace
// Remove them when they are bought or canceled

// const { default: Moralis } = require("moralis");  //no need since cloud auto injects

Moralis.Cloud.afterSave("ItemListed", async (request) => {})
