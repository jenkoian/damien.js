(function (document) {

    var images = document.getElementsByTagName('img');
    var pictures = document.getElementsByTagName('picture');
    var image_url = 'https://ibin.co/4QfCJq02uPFT.png';

    for (var i = 0; i < images.length; i++) {
        images[i].src = image_url + '?' + images[i].width + '/' + images[i].height;
    }

    for (var j = 0; j < pictures.length; j++) {
        var picture_image = pictures[j].getElementsByTagName('img');
        var srcs = pictures[j].getElementsByTagName('source');

        for (var k = 0; k < srcs.length; k++) {
            srcs[k].srcset = image_url + '?' + picture_image[0].width + '/' + picture_image[0].height;
        }
    }

})(document);
