function star(){
    let count = 500;
    let scene = document.querySelector('body');
    let i = 0;
    while(i<count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        let duration = Math.random()*10;
        let size = Math.random()*2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        scene.appendChild(star);
        i++
    }
}