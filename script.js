const caollapsibleBtns = document.querySelectorAll('.collapsible-icon'); 
const caollapsibleContents = document.querySelectorAll('.content'); 

caollapsibleBtns.forEach((btn, btnIdx) =>{
    btn.addEventListener('click', () =>{
        let icon=btn.firstElementChild;
        if(icon.classList.contains('fa-chevron-down')) {
            icon.className= 'fa fa-chevron-up';
            caollapsibleContents.forEach((content, contentIdx) => {
                if(btnIdx == contentIdx){
                    content.classList.add('content-show');
                }
            })
        } else if(icon.classList.contains('fa-chevron-up')){
            icon.className='fa fa-chevron-down';
            caollapsibleContents.forEach((content,contentIdx) =>{
                if(btnIdx == contentIdx){
                    content.classList.remove('content-show')
                }
            })
        }
    })
})