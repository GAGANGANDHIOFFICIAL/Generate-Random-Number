let btn=document.querySelector('button')
let h3=document.querySelector('h3')
let color=document.querySelector(".color")
btn.addEventListener('click',function(){
    let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        color.style.backgroundColor = `rgb(${r},${g},${b})`;
        h3.innerText=`rgb(${r},${g},${b})`;
});