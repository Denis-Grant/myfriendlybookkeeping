
const gridContainer = document.querySelector('.grid-container');
const moreBtn01 = document.querySelector('.more-btn-01');
const moreBtn02 = document.querySelector('.more-btn-02');
const moreBtn03 = document.querySelector('.more-btn-03');
const para01 = document.querySelector('.para-01');
const para02 = document.querySelector('.para-02');
const para03 = document.querySelector('.para-03');
const excerpt01 = document.querySelector('.excerpt-01');
const excerpt02 = document.querySelector('.excerpt-02');
const excerpt03 = document.querySelector('.excerpt-03');
const description = document.querySelectorAll('.box .description');


function removeFlex(){
    console.log('IN')
    description.forEach((item)=>{
        item.style.display === 'block' ? item.style.display = 'flex' :
        item.style.display = 'block'
        // item.style.display = 'display: block'
        console.log(item.style.display)
        });
}
function topLink(){
        location.href = '#what-we-do';
}

gridContainer.addEventListener(('click'), (e)=>{
    if (e.target.className === 'more-btn-01'){
    //    removeFlex();
        moreBtn01.innerHTML === 'More' ? 
        (moreBtn01.innerHTML = 'Less', topLink()) :
            moreBtn01.innerHTML = 'More';
    para01.classList.toggle('hide');
    excerpt01.innerHTML.length > 1 ? excerpt01.innerHTML = "" :
        excerpt01.innerHTML = ".........";

    }
    if (e.target.className === 'more-btn-02'){
        // removeFlex();
        moreBtn02.innerHTML === 'More' ? moreBtn02.innerHTML = 'Less' :
            moreBtn02.innerHTML = 'More';
    para02.classList.toggle('hide');
    excerpt02.innerHTML.length > 1 ? excerpt02.innerHTML = "" :
        excerpt02.innerHTML = ".........";
    }
    if (e.target.className === 'more-btn-03'){
        // removeFlex();
        moreBtn03.innerHTML === 'More' ? moreBtn03.innerHTML = 'Less' :
            moreBtn03.innerHTML = 'More';
    para03.classList.toggle('hide');
    excerpt03.innerHTML.length > 1 ? excerpt03.innerHTML = "" :
        excerpt03.innerHTML = ".........";
    }
});