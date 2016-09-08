// WARNING this API does not work from jQuery browser requests. We learnt this the hard way

// https://api.brewerydb.com/v2/search?q=Heineken&key=8fbcb3bff93393f48e4fe89ed3f7b7fc

// Save important elements
// API_KEY
var API_KEY = "8fbcb3bff93393f48e4fe89ed3f7b7fc";
// Base URL
var baseURL = "http://api.brewerydb.com/v2/search?";
// jQuery variables
var searchTerm;

// Callback to deal with data/ response
// Display on the page container

// AJAX fetch request with searchTerm
var searchBeer = function(searchTerm) {
  $.ajax({
    url: baseURL,
    type: 'GET',
    format: 'JSON',
    data: {
      q: searchTerm,
      key: API_KEY
    }
  }).done(function(data) {
    console.log(data);
  });
};

// Event listener on form check if value entered
// Save value in searchTerm global variable
$(document).ready(function() {

  $('form').on('submit', function(e) {
    searchTerm = $('.search').val();

    console.log("clicked");
    e.preventDefault();
    if (searchTerm === "") {
      console.log("Empty");
      return false;
    } else {
      searchBeer(searchTerm);
    }
  });
});
