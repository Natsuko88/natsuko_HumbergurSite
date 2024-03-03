const mBtn=document.querySelector('.c-button--menu');
console.log(mBtn);
const lSide=document.querySelector('.l-sidebar');
console.log(lSide);
const mBtnSide=lSide.querySelector('.c-button--menu');
console.log(mBtnSide);
const bLayer=document.querySelector('.p-black-layer');
console.log(bLayer);

mBtn.addEventListener('click',()=> {
        mBtn.classList.toggle('is-active');
        lSide.classList.toggle('is-active');
        mBtnSide.classList.toggle('is-active');
        bLayer.classList.toggle('is-active');
    });