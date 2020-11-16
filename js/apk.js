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
