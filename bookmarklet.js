javascript:(function()%7B(function%20(document)%20%7Bvar%20images%20%3D%20document.getElementsByTagName('img')%3Bvar%20pictures%20%3D%20document.getElementsByTagName('picture')%3Bvar%20image_url%20%3D%20'https%3A%2F%2Fjenko.me%2Fassets%2Fimg%2Fdamien.png'%3Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20images.length%3B%20i%2B%2B)%20%7Bimages%5Bi%5D.src%20%3D%20image_url%20%2B%20'%3F'%20%2B%20images%5Bi%5D.width%20%2B%20'%2F'%20%2B%20images%5Bi%5D.height%3B%7Dfor%20(var%20j%20%3D%200%3B%20j%20%3C%20pictures.length%3B%20j%2B%2B)%20%7Bvar%20picture_image%20%3D%20pictures%5Bj%5D.getElementsByTagName('img')%3Bvar%20srcs%20%3D%20pictures%5Bj%5D.getElementsByTagName('source')%3Bfor%20(var%20k%20%3D%200%3B%20k%20%3C%20srcs.length%3B%20k%2B%2B)%20%7Bsrcs%5Bk%5D.srcset%20%3D%20image_url%20%2B%20'%3F'%20%2B%20picture_image%5B0%5D.width%20%2B%20'%2F'%20%2B%20picture_image%5B0%5D.height%3B%7D%7Dvar%20elements%20%3D%20%5B'div'%2C%20'body'%2C%20'td'%5D%3Bfor%20(var%20l%20%3D%200%3B%20l%20%3C%20elements.length%3B%20l%2B%2B)%20%7Bvar%20tags%20%3D%20document.getElementsByTagName(elements%5Bl%5D)%3Bfor%20(var%20m%20%3D%200%3B%20m%20%3C%20tags.length%3B%20m%2B%2B)%20%7Bvar%20%20tag%20%3D%20tags%5Bm%5D%3Bif%20(tag.style.backgroundImage)%20%7Btag.style.backgroundImage%20%3D%20'url(%22'%20%2B%20image_url%20%2B%20'%22)'%3B%7D%7D%7D%7D)(document)%7D)()
