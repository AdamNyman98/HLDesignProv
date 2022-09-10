import apiFetcher from './modules/apiFetcher.js'

apiFetcher.standardProducts()

searchButtonAddEvent()

searchFieldAddEvent()
  
radioAddEvent()
  
window.setInterval(changeSlide, 5000);


//adds event handler to Search button
function searchButtonAddEvent(){
  const searchbtn = document.getElementById('searchbtn')
  searchbtn.addEventListener('click', search)
}

//adds event handler to Search field so that the "enter"-key can be used for searching
function searchFieldAddEvent(){
  const searchfield = document.getElementById('searchfield')

  searchfield.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
      event.preventDefault()
      search()
    }
  })
}

// search is the event that is triggered when searching 
function search(){
  const searchTerm = document.getElementById('searchfield').value
  apiFetcher.searchProducts(searchTerm)
}

// adds event handler to the radio button to make them dictate the slideshow
function radioAddEvent() {
  const radio1 = document.getElementById('slide1')
  const radio2 = document.getElementById('slide2')
  const radio3 = document.getElementById('slide3')

  radio1.addEventListener('change', function() {
    if (radio1.checked == 1){
      changeToSlide('1')
    }
  })
  radio2.addEventListener('change', function() {
    if (radio2.checked == 1){
      changeToSlide('2')
    }
  })
  radio3.addEventListener('change', function() {
    if (radio3.checked == 1){
      changeToSlide('3')
    }
  })
}

// method used by the interval in main to switch the slideshows after a dictated time
function changeSlide() {
  const radio1 = document.getElementById('slide1')
  const radio2 = document.getElementById('slide2')
  const radio3 = document.getElementById('slide3')

  if (radio1.checked == 1){
    changeToSlide('2')
  }
  else if (radio2.checked == 1){
    changeToSlide('3')
  }
  else if (radio3.checked == 1){
    changeToSlide('1')
  }
}

// changes the slide when either pressing the radio buttons or after the interal time
function changeToSlide(nr){
  const img= document.getElementById('slideImg')
  const srcId = 'slideImg' + nr
  const radioId = 'slide' + nr
  const srcRef = document.getElementById(srcId)
  const radioRef = document.getElementById(radioId)
  img.src = srcRef.src
  radioRef.checked = true

  const buttons = document.getElementById('buttons')
  if(nr === '1'){
	  buttons.style.display = ""; 	  
  } else  {
    buttons.style.display = "none";
  }
}

