(function (document) {

    var images = document.getElementsByTagName('img');
    var pictures = document.getElementsByTagName('picture');
    var image_url = 'https://jenko.me/assets/img/damien.png';

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

    var elements = ['div', 'body', 'td'];

    for (var l = 0; l < elements.length; l++) {
        var tags = document.getElementsByTagName(elements[l]);
        for (var m = 0; m < tags.length; m++) {
            var  tag = tags[m];
            if (tag.style.backgroundImage) {
                tag.style.backgroundImage = 'url("' + image_url + '")';
            }
        }
    }

})(document);
