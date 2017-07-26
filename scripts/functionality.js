window.onload = function() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    
    switch(sPage){
        case "blog.html":
            $('.btnBlog').addClass("active");
            $('.btnMap').removeClass("active");
            $('.btnAboutMe').removeClass("active");
            break;
        case "map.html":
            $('.btnMap').addClass("active");
            $('.btnBlog').removeClass("active");
            $('.btnAboutMe').removeClass("active");
            break;
        case "aboutme.html":
            $('.btnAboutMe').addClass("active");
            $('.btnBlog').removeClass("active");
            $('.btnMap').removeClass("active");
    }
}