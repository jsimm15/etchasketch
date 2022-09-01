function createGrid() {
    const gridContainer = document.querySelector('.gridContainer');
    const gridSize = 100;
    const root = Math.sqrt(gridSize);
    console.log(root);    


    for (let i=0; i < gridSize; i++){
        let element = document.createElement('div');
        element.id = `div${i+1}`;
        element.innerText = element.id;
        gridContainer.appendChild(element);
        element.addEventListener('mouseover', (e) => colorRandom(element));
    }
    console.log('before');
    gridContainer.style.cssText += `grid-template-columns: repeat(${root}, 1fr);`;
    console.log('after');
}
function colorBlack(event){
    event.style.backgroundColor ='black';
}
function randomColor(){
    let color = [];
    for (i=0; i<3; i++){ 
        color[i]= Math.floor((Math.random()*255));
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}
function colorRandom(event){
    console.log('selecting...')
    let color = randomColor();
    console.log(`${color} selected...`)

    event.style.backgroundColor = color;
}
createGrid();