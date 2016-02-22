$(document).ready(function(){

  $('.field input, .field textarea, .field select').focus(function(){ $(this).parents('.field').addClass('is-focused'); });
  $('.field input, .field textarea, .field select').blur(function(){ $(this).parents('.field').removeClass('is-focused'); });

});