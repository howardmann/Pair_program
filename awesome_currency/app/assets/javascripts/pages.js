// Note to future selves: before using api, use the code below in a seperate url to check if the get JSON request works:
// $.getJSON("http://api.fixer.io/latest");

// http://api.fixer.io/latest?base=USD

// Save important elements

  // Base URL
  var baseURL = "http://api.fixer.io/latest?";
  // jQuery variables
  var searchTerm;


//display currency
var displayCurrency = function(key, value){
  var $tr = $("<tr></tr>");
  $("table").append($tr);
  var $tdKey = $("<td></td>").append(key);
  $tr.append($tdKey);
  var $tdValue = $("<td></td>").append(value);
  $tr.append($tdValue);

};

//handle currency;
var handleCurrency = function(data){
  var rates = data.rates;
  for(var key in rates){
    displayCurrency(key, rates[key]);
  }
};

// AJAX fetch request with searchTerm
var searchCurrency = function(searchTerm) {
  $("table").empty();
  $.ajax({
    url: baseURL,
    type: 'GET',
    format: 'JSON',
    data: {
      base: searchTerm
    }
  }).done(handleCurrency);
};

// Event listener on form check if value entered
  // Save value in searchTerm global variable
$(document).ready(function(){

  $('form').on('submit', function(e){
    searchTerm = $('#currencySelect option:selected').val();

    console.log("clicked");
    e.preventDefault();
    if (searchTerm === "") {
      console.log("Empty");
      return false;
    } else {
      searchCurrency(searchTerm);
    }
  });
});
