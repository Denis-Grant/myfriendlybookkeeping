
const gridContainer = document.querySelector('.grid-container');
const moreBtn01 = document.querySelector('.more-btn-01');
const moreBtn02 = document.querySelector('.more-btn-02');
const moreBtn03 = document.querySelector('.more-btn-03');
const para01 = document.querySelector('.para-01');
const para02 = document.querySelector('.para-02');
const para03 = document.querySelector('.para-03');

// moreBtn01.addEventListener('click',()=>{
//     para01.classList.toggle('hide');
//     moreBtn01.innerHTML === 'More' ? moreBtn01.innerHTML = 'Less' :
//         moreBtn01.innerHTML = 'More'

// });
// MORE BUTTONS CLICKED
gridContainer.addEventListener(('click'), (e)=>{
    if (e.target.className === 'more-btn-01'){
        moreBtn01.innerHTML === 'More' ? moreBtn01.innerHTML = 'Less' :
            moreBtn01.innerHTML = 'More';
    para01.classList.toggle('hide');
    }
    if (e.target.className === 'more-btn-02'){
        moreBtn02.innerHTML === 'More' ? moreBtn02.innerHTML = 'Less' :
            moreBtn02.innerHTML = 'More';
    para02.classList.toggle('hide');
    }
    if (e.target.className === 'more-btn-03'){
        moreBtn03.innerHTML === 'More' ? moreBtn03.innerHTML = 'Less' :
            moreBtn03.innerHTML = 'More';
    para03.classList.toggle('hide');
    }
});