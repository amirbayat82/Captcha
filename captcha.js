function Generate(){
    let captcha_holder = document.getElementById('captcha-holder');
    let number_Generate = Math.random() * 10000000;
    captcha_holder.innerHTML= Math.floor(number_Generate);
}