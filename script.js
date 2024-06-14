$(document).ready(function()
{


    $('#menu').click(function()
{

$(this).toggleClass('fa-times');

$('header').toggleClass('toggle');
});
});


$(document).ready(function()
{

$(window).on('scroll load',function()

{
$('menu').removeClaSS('fa-times');
$('header').toggleClass('toggle');



})


}
    
    
    
    )