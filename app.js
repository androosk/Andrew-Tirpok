const pageyStuff = [
  'design',
  'Design is the intermediary between information and understanding.',
  '-- Hans Hoffman',
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
//Page switching and loading function
function pageLoad() {
  $('#section-quote').text(pageyStuff[parseInt(fnum)+1])
  $('#section-author').text(pageyStuff[parseInt(fnum)+2])
  $('#design-button, #develop-button, #implement-button').removeClass()
  let currentPage = '#' + pageyStuff[parseInt(fnum)]
  let otherPageOne = '#'+ pageyStuff[parseInt(fnum) + pageyStuff[(parseInt(fnum)+3)]]
  let otherPageTwo = '#' + pageyStuff[parseInt(fnum)+pageyStuff[(parseInt(fnum)+4)]]
  $(currentPage + '-button').addClass(pageyStuff[15])
  $(otherPageOne + '-button, ' + otherPageTwo + '-button').addClass(pageyStuff[16])
  $(otherPageOne + '-button, ' + otherPageTwo + '-button').addClass(pageyStuff[16])
  $(currentPage + '-section').removeAttr('hidden')
  $(otherPageOne + '-section, ' + otherPageTwo + '-section').attr('hidden', 'true')
}
//Initial page load
pageLoad()
