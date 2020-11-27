var x = 232
function klienci()
{

    if(x<999)
    {
        document.getElementById('klienci').innerHTML = '<span>'+x+'</span>'
        x++
        if(x<=355)
        {
            var time = Math.floor(Math.random() * 1500) + 125
            setTimeout(klienci, time);
        }
        else if(x>355 && x<550)
        {
            var time = Math.floor(Math.random() * 3500) + 1000
            setTimeout(klienci, time);
        }
        else
        {
            var time = Math.floor(Math.random() * 6000) + 2000
            setTimeout(klienci, time);
        }
    }
    else
    {
        document.getElementById('klienci').innerHTML = '<span>999+</span>'
    }
}


var show = 0
function showMenu()
{
    if(show == 0)
    {
        document.getElementById('mobile_menu_inside_items').style.visibility='visible'
        document.getElementById('mobile_menu_inside_items').style.opacity='1'
        document.getElementById('mobile_menu_inside_items').style.transitionDuration='0.3s'
        show = 1
    }
    else
    {
        //document.getElementById('mobile_menu_inside_items').style.visibility='hidden'
        document.getElementById('mobile_menu_inside_items').style.visibility='hidden'
        document.getElementById('mobile_menu_inside_items').style.opacity='0'
        document.getElementById('mobile_menu_inside_items').style.transitionDuration='0.3s'
        show = 0
    }

}


function hideMenu()
{
    document.getElementById('mobile_menu_inside_items').style.visibility='hidden'
    document.getElementById('mobile_menu_inside_items').style.opacity='0'
    document.getElementById('mobile_menu_inside_items').style.transitionDuration='0.3s'
    var show = 0
}

/*

document.getElementById('mobile_menu_inside_items').style.display='block'

*/
