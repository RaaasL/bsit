var img = 2

function changeImage(which){

    var links = {
                    1:"www.domydobra.pl",
                    2:"www.prawnik-rpiszko.com",
                    3:"www.fabryka-usmiechu.eu"
                }

    var desc = {
                    1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

    }

    var changeImage = '<img src="img/www/'+img+'.png" alt="'+links[img]+'">'
    var changeDesc = '<a href="'+links[img]+'" target="_blank"><h2>'+links[img]+'</h2></a><p>'+desc[img]+'</p>'

    if(which=='previous')
    {
        img--
        if(img<=0)
            img = 3
        document.getElementById('gallery').innerHTML = changeImage
        document.getElementById('real_desc').innerHTML = changeDesc
    }
    else if(which=='next')
    {
        img++
        if(img>=4)
            img = 1
        document.getElementById('gallery').innerHTML = changeImage
        document.getElementById('real_desc').innerHTML = changeDesc
    }
    else
    {
        alert("3nd 0f L!ne")
    }
}
