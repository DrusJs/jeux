document.addEventListener('DOMContentLoaded', () => {

    if (document.querySelector('.menu-wrapper')) {
        document.querySelector('.menu-wrapper').addEventListener('click', (e)=>{
            e.currentTarget.classList.toggle('active')
        })
    }

    if (document.querySelector('.avatar-card')) {
        document.querySelectorAll('.avatar-card').forEach(el=>{
            el.addEventListener('click', (e)=>{
                if (!e.currentTarget.classList.contains('active')) {
                    const active = document.querySelector('.avatar-card.active') 
                    
                    active && active.classList.remove('active')
                    e.currentTarget.classList.add('active')
                } else {
                    e.currentTarget.classList.remove('active')
                }
            })
        })
    }

});
