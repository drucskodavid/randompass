const passwordBox = document.getElementById('passwordBox');
const bt_generate = document.getElementById('generateBt');
const copyBt = document.getElementById('copyBt');
const pwdLenForm = document.getElementById('pwdLen');
const cbSpecChars = document.getElementById('cbSpecChars');
const cbNumbers = document.getElementById('cbNumbers');
const cbUpper = document.getElementById('cbUpper');
const cbPIN = document.getElementById('cbPIN');
const msgBox = document.getElementById('msgBox');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specChars = '$&@#?!%=()|{}<>/^°';

let pwdLen = 0;
let w = window.innerWidth;


// Init settings
cbNumbers.setAttribute('checked', '');
cbSpecChars.setAttribute('checked', '');
cbUpper.setAttribute('checked', '');
if(w < 640){
    passwordBox.setAttribute('placeholder', 'Tap the button to generate');
}

// Show message
function show_msg(){
    msgBox.style.display = 'flex';
    document.getElementById('msgText').innerHTML = 'Copied to clipboard (click to close)';
}

// Hide message
msgBox.addEventListener('click', function(){
    msgBox.style.display = 'none';
})

// Generate password
bt_generate.addEventListener('click', function(){
    var allChars_ = '';

    if(cbPIN.checked){
        pwdLen = 4;
        allChars_ = numbers;
    } else{
        if(pwdLenForm.value == ''){
            pwdLen = 12;
        } else {
            pwdLen = Number(pwdLenForm.value);
        };
    
        if(cbUpper.checked){
            var allChars_ = allChars_ + upperCase + lowerCase;
        }
    
        if(cbNumbers.checked){
            var allChars_ = allChars_ + numbers + lowerCase;
        }
    
        if(cbSpecChars.checked){
            var allChars_ = allChars_ + specChars + lowerCase;
        }
    
        if(cbSpecChars.checked == false && cbNumbers.checked == false && cbUpper.checked == false){
            var allChars_ = lowerCase;
        }
    };

    password = '';
    while (pwdLen > password.length) {
        password += allChars_[Math.floor(Math.random() * allChars_.length)];
    }
    
    passwordBox.value = password;
    navigator.clipboard.writeText(password);
    show_msg()
});

copyBt.addEventListener('click', function(){
    navigator.clipboard.writeText(password);
    show_msg();
});