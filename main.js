const mBtn=document.querySelector('.c-button--menu');
console.log(mBtn);
const lSide=document.querySelector('.l-sidebar');
console.log(lSide);
const mBtnSide=lSide.querySelector('.c-button--menu');
console.log(mBtnSide);
const bLayer=document.querySelector('.p-black-layer');
console.log(bLayer);
const wrapperMain=document.querySelector('.c-wrapper-main');
console.log(wrapperMain);
const body=document.querySelector('body');


mBtn.addEventListener('click',()=> {
        mBtn.classList.toggle('is-active');
        lSide.classList.toggle('is-active');
        mBtnSide.classList.toggle('is-active');
        bLayer.classList.toggle('is-active');
       // wrapperMain.classList.toggle('is-active');
        body.classList.toggle('is-active');
    });

//リサイズ
    window.addEventListener('resize', function(){
        mBtn.classList.remove('is-active');
        lSide.classList.remove('is-active');
        mBtnSide.classList.remove('is-active');
        bLayer.classList.remove('is-active');
       // wrapperMain.classList.remove('is-active');
        body.classList.remove('is-active');
    });
  