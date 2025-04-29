class CardManager{
    // Attributes
    flippedCards = new Set();
    urlFactory;
    // Constructor
    constructor (factory) {
    this.urlFactory = factory;
    }
    // Generate new card based in the hero number
    gen (heroNumber) {
    let template = document.getElementById("cardTemplate");
    let clone = template.content.cloneNode(true);
    return clone; // Return the modified clone
    }
}