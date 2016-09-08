console.log("Hello World");

// https://api.brewerydb.com/v2/search?q=Heineken&key=8fbcb3bff93393f48e4fe89ed3f7b7fc

// <form>
//   <input class="search" type="text" placeholder="Type your beer">
//   <input type="submit" value="search">
// </form>
//
// <div class="container">
// </div>

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
  }).done(function(data){
    console.log(data);
  });
};



// var searchFlickr = function(term){
//   $error.empty(); // Clear any error messages
//
//   // jQuery AJAX call to fetch desired JSON data
//   $.ajax({
//     url: baseFlickrURL,
//     type: "GET",
//     //HM note: data is the equivalent of url search params i.e. baseFlickrURL+ 'method=flickr.photos.search'+'api_key=...' etc.'
//     data: {
//       method: "flickr.photos.search",
//       api_key: API_KEY,
//       text: term, // From input submit value
//       format: "json",
//       page: pageNumber, // Variable will change based on next and prev page button event listener
//       per_page: 50,
//       nojsoncallback: true  // Specific callback to Flickr API, disable
//     }
//   }).done(function(data){
//     handleSearchData(data); // Upon success response to callback above
//   });
// };



// Event listener on form check if value entered
  // Save value in searchTerm global variable
$(document).ready(function(){

  $('form').on('submit', function(e){
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
