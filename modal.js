$(document).ready(function(){
var name = "";
  $('.lightbox-link').click(function(e){

        var link_element = $(e.currentTarget);
        var imageURL = link_element.data('img');
        var image = $('#lightbox-image');
        image.attr('src', imageURL);
        centerImage(image);

        $('.lightbox-outer').show();



        $('#nameInfo').keydown(function(event){


          if(event.which === 13){
               name = $('#nameInfo').val();

              $('.lightbox-outer').hide();


              $('#title').replaceWith("<h2>Welcome, " + name + "</h2>");
          }
  });


})




})

function centerImage(image){
  console.log("centerImage is firing")
  image.load(function(){
    var pageHeight = $(window).height();
    var imageHeight = image.height();
    var imageOffset = (pageHeight - imageHeight) / 2;
    $('.lightbox-inner').css("margin-top", imageOffset);

  })

}