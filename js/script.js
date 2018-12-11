$(document).ready(function(){
$('.scroll').click(function(){
if($(window).scrollTop()<880){
$('html').animate({scrollTop: 1000}, 1500);
}
else {
if($(window).scrollTop()<1620){
$('html').animate({scrollTop: 1900}, 1500);
}
else {
if($(window).scrollTop()< 2545){
$('html').animate({scrollTop: 2845}, 1500);
}
else {
if($(window).scrollTop()< 3565){
$('html').animate({scrollTop: 3765}, 1500);
}
else{
if($(window).scrollTop()< 3921){
$('html').animate({scrollTop: 4121}, 1500);
}
else{
if($(window).scrollTop()< 4771){
$('html').animate({scrollTop: 4971}, 1500);
}
}
}
}
}
}
});

});
console.log("-----");