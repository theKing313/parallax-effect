const person = document.querySelector('.images-header__person');
const label = document.querySelector('.header__label');
const text = document.querySelector('.header__text');
const mountains = document.querySelector('.images-header__mountains');
const parallax =  document.querySelector('.header');
window.addEventListener('mousemove', (e)=>{
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    person.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    label.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)';
    text.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)';
    mountains.style.transform = 'translate(-' + x * 122 + 'px, -' + y * 122 + 'px)';
})
let thresholdStes = [];
for (var i = 0; i < 1.0; i+= 0.005) {
    thresholdStes.push(i);
}
let callback = function  (entries, observer) {
    const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    setParallaxStyle(scrollTopProcent);

}
const observer = new IntersectionObserver(callback,{
    threshold: thresholdStes
})
observer.observe(document.querySelector('.content'));
function setParallaxStyle(scrollTopProcent) {
    document.querySelector('.header__label').style.cssText = `transform:translate(0%,-${scrollTopProcent*2}%) ` ;
    document.querySelector('.header__text').style.cssText = `transform:translate(0%,-${scrollTopProcent*10}%) ` ;
    mountains.style.cssText = `transform:translate(-${scrollTopProcent/4}%,0%) ` ;
}