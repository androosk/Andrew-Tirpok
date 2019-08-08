const pageyStuff = [
  'design',
  '',
  '',
  5,
  10,
  'develop',
  'Someone asked me, if I were stranded on a desert island what book would I bring ... "How to Build a Boat."',
  '-- Steven Wright',
  -5,
  5,
  'implement',
  'Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.',
  '-- Joel A Barker',
  -5,
  -10,
  'navbar-brand nav-link active text-warning',
  'navbar-brand nav-link text-white'
]
let fnum = '0'
//Listener for button click
$('#design-button, #develop-button, #implement-button').click(function(event){
  fnum = $(this).attr('data-num')
  pageLoad()
})
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggler:visible').click()
})
//Page switching and loading function
function pageLoad() {
  $('#design-button, #develop-button, #implement-button').removeClass()
  let currentPage = '#' + pageyStuff[parseInt(fnum)]
  let otherPageOne = '#'+ pageyStuff[parseInt(fnum) + pageyStuff[(parseInt(fnum)+3)]]
  let otherPageTwo = '#' + pageyStuff[parseInt(fnum)+pageyStuff[(parseInt(fnum)+4)]]
  $(currentPage + '-button').addClass(pageyStuff[15])
  $(otherPageOne + '-button, ' + otherPageTwo + '-button').addClass(pageyStuff[16])
  $(otherPageOne + '-button, ' + otherPageTwo + '-button').addClass(pageyStuff[16])
}
//Initial page load
pageLoad()

function onScroll(e){
  let scrollPos = $(document).scrollTop()
  $("li>a").each(function(){
    let currLink = $(this)
    let refElement = $(currLink.attr("href"))
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $("li>a.active").removeClass("active")
      currLink.addClass("active")
    }
  })
}

$(document).ready(function (){
  $(document).on("scroll", onScroll)
})

document.addEventListener('DOMContentLoaded', function(event){
  let x = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (x < 768) {
    $('.bio-pic').removeClass('col-4')
    $('.bio-pic').addClass('col-12')
    $('.design-header').addClass('mini-design-header')
    $('.design-header').removeClass('col container-fluid design-header')
    $('#overlay-area').attr('hidden', 'true')
  }
})
