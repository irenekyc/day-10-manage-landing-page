const navbar = document.querySelector('nav')
const openBtnClass= document.getElementById('open-menu-div').classList
const closeBtnClass= document.getElementById('close-menu-div').classList
const mobileMenuClass = document.getElementById('nav-links').classList


navbar.addEventListener('click', (e)=>{
    console.log(e.target.id)
    if (e.target.id.includes("menu")){
        if (e.target.id.includes("open") || e.target.id.includes("close")){
            openBtnClass.toggle('hide-originally')
            closeBtnClass.toggle('hide-originally')
            mobileMenuClass.toggle('hide-originally')

            if (e.target.id.include ("close")){
                console.log(e.target.id)

            }
        } 
    }
})
