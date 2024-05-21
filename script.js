let sideMenu = document.getElementById('sidemenu');

function openMenu() {
    sideMenu.style.right = "0"
}
function closeMenu() {
    sideMenu.style.right = "-180px"
}

// -----------form validation -----------------

function validateForm(){
    const userName = document.getElementById("name").value 
    const userMobile = document.getElementById("mobile").value
    const userEmail = document.getElementById("email").value
    const form = document.getElementById("form")

    if(userName && userEmail && userMobile) {
        if(userMobile.length === 10){
            alert('Submitted successfuly');
            FormData.reload();
        }
        else{
            alert('Please enter valid 10 digit number');
        }
    }
    else{
        if(!userName) {
            alert('Please enter your name!');
        }
    
        else if(!userEmail) {
            alert('Enter a valid email address!');
        }
    
        else if(userMobile.length !== 10) {
            alert('Enter a valid 10 digit number');
        }

        else {
            alert('Submitted successfuly');
            FormData.reload();
        }
    }
};