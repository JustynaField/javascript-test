$(document).ready(() => {
	$('#content li:last').css('color', 'red')
  $("#content2 li:contains('Sally') ul").css('color', 'red');
  $("#content2 li:contains('Sally') ul>li>ul").css('color', 'black');

  writeFieldValue();
  findDimensions();
  fetchData();
})


//Get a Field value and Write it to the page
const writeFieldValue = () => {

  const codeType = $('option:selected').val()
  $('fieldset').append(`<div id="newDiv">${codeType}</div>`)

  changeFieldValue()
}

const changeFieldValue = () => {
  $('select').on('change', () => {

    const codeType = $('option:selected').val()
    $('#newDiv').empty()
    $('fieldset').append(`<div id="newDiv">${codeType}</div>`)
  })
}


//Find Dimensions of an Element
const findDimensions = () => {

  const div = $('#setDims');
  const divHeight = div.outerHeight();
  const divWidth = div.outerWidth();

  $('#setDims').html(`<p>Height: ${divHeight}px, Width: ${divWidth}px</p>`)
}


//Events
$('#clickEventLink').on('click', () => {
  $('#clickEventLink').toggleClass('not-clicked clicked')
})


//Ajax
const fetchData = () => {
  fetch("http://127.0.0.1:8080/ajax_return.html")
  .then(res => res.json())
  .then(data => {
    writeJsonList(data)
  })
}

const writeJsonList = (data) => {
  for (key in data) {
    $('#jsonResponse').append(`<p>${key}: ${data[key]}<p>`)
  }
}
