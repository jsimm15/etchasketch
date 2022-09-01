//Create a square grid og size (length X length) elements
function createGrid(length) {
    const gridContainer = document.querySelector('.gridContainer');   
    const gridSize = (length**2);

    for (let i=0; i < gridSize; i++){
        let element = document.createElement('div');
        element.id = `div${i+1}`;
        element.className = 'gridItem';
        /*element.innerText = element.id; <--- Toggle to show element number*/
        gridContainer.appendChild(element);
        element.addEventListener('mouseover', (e) => colorBlack(element));
    }
    gridContainer.style.cssText += `grid-template-columns: repeat(${length}, 1fr);`;
}
//Paints activated element to black
function colorBlack(event){
    event.style.backgroundColor ='black';
}
//Paints activated element to white
function colorWhite(event){
    event.style.backgroundColor = 'white';
}
//Helper to select random (r,g,b) color value
function randomColor(){
    let color = [];
    for (i=0; i<3; i++){ 
        color[i]= Math.floor((Math.random()*255));
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}
//Paints activated element to random color
function colorRandom(event){
    let color = randomColor();
    event.style.backgroundColor = color;
}
//Delete all grid items. To be called before generating new grid
function deleteContainerItems(){
    const gridContainer =document.querySelector('.gridContainer');
    let gridItems = Array.from(gridContainer.childNodes);
    gridItems.forEach((item) => item.remove());
}
//Helper to initialize or reset event listeners
function resetEventListeners() {
    const blackButton = document.getElementById('black');
    const rainbowButton = document.getElementById('rainbow');
    const clearButton = document.getElementById('clear');
    const eraserButton =document.getElementById('eraser')
    const gridContainer =document.querySelector('.gridContainer');
    let gridItems = Array.from(gridContainer.childNodes);


    blackButton.addEventListener('click', () => {
        gridItems.forEach((item) => {
            item.addEventListener('mouseover', (e) => colorBlack(item));  
        })});
    rainbowButton.addEventListener('click', () => {
        gridItems.forEach((item) => {
            item.addEventListener('mouseover', (e) => colorRandom(item));
        })});
    clearButton.addEventListener('click', () =>{
        gridItems.forEach((item) => {
            item.style.backgroundColor = 'white';
        })});
    eraserButton.addEventListener('click', () => {
        gridItems.forEach((item) => {
            item.addEventListener('mouseover', (e) => colorWhite(item));
        })});

}
//Builds sidebar of functional buttons on left of screen
function createSidebar(){
    const sb = document.querySelector('.sidebar');
    const items = document.querySelectorAll('.gridItem');
    itemsArr = Array.from(items);

    //Create button to change to 10X10 grid
    const gridTenButton = document.createElement('button');
    gridTenButton.id = 'ten';
    gridTenButton.innerText = '10 X 10';
    sb.appendChild(gridTenButton);
    gridTenButton.addEventListener('click', () => {
        deleteContainerItems();
        createGrid(10);
        resetEventListeners();
    });
    //Create button to change to 50X50 grid
    const grid50button = document.createElement('button');
    grid50button.id = 'fifty';
    grid50button.innerText = '50 X 50';
    sb.appendChild(grid50button);
    grid50button.addEventListener('click', () => {
        deleteContainerItems();
        createGrid(50);
        resetEventListeners();
    });
    //Create button to change to 100 X 100 grid
    const grid100Button = document.createElement('button');
    grid100Button.id = 'hundred';
    grid100Button.innerText = '100 X 100';
    sb.appendChild(grid100Button);
    grid100Button.addEventListener('click', () => {
        deleteContainerItems();
        createGrid(100);
        resetEventListeners();
    })
    //Create button to enable black coloring
    const blackButton = document.createElement('button');
    blackButton.id = 'black';
    blackButton.innerText = 'Black Marker';
    sb.appendChild(blackButton);
        
    //Create button to enable random coloring
    const rainbowButton =document.createElement('button');
    rainbowButton.id = 'rainbow';
    rainbowButton.innerText = 'Rainbow';
    sb.appendChild(rainbowButton);

    //Create eraser button to change individual elements to white
    const eraserButton = document.createElement('button');
    eraserButton.id = 'eraser';
    eraserButton.innerText = 'Eraser';
    sb.appendChild(eraserButton);
    
    //Create button to clear grid back to all white
    const clearButton = document.createElement('button');
    clearButton.id = 'clear';
    clearButton.innerText = 'Clear';
    sb.appendChild(clearButton);
    
    
    //Initialize button event listeners
    resetEventListeners();
}

//Initialize grid
createGrid(50);
//Initialize sidebar
createSidebar();