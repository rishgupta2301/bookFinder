function findBook() {
    var userSearch = document.getElementById('userInput').value;
    // document.getElementById('result').innerHTML = userSearch;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({ //this is making AJAX request using jQuery
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: "JSON", //we are fetching the data from the api in the json format 
        success: function(book) {
            console.log(book);
            for (var i = 0; book.items.length; i++) {
                var wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'media';
                // create img element for images
                var image = document.createElement('img');
                image.className = 'mr-3'; //by seeing on bootstrap under layouts --> media-object
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;

                //creating div element with class = media-body
                var div = document.createElement('div');
                div.className = 'media-body';
                //create header for body
                var header = document.createElement('h2');
                header.className = 'mt-0';
                header.innerHTML = book.items[i].volumeInfo.title;
                //append header to the body
                div.appendChild(header); // as the header is inside the div element in the bootstrap code
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                //create h6 element for author
                var author = document.createElement('h6');
                author.innerHTML = '<b>Authors:</b> ' + book.items[i].volumeInfo.authors;
                div.appendChild(author);
                // create paragraph for country
                var country = document.createElement('p');
                country.innerHTML = '<b>Country:</b> ' + book.items[i].accessInfo.country;
                div.appendChild(country);
                //create para for page count
                var pageCount = document.createElement('p');
                pageCount.innerHTML = '<b>Pages:</b> ' + book.items[i].volumeInfo.pageCount;
                div.appendChild(pageCount);
                //create element for date
                var publishedYear = document.createElement('p');
                publishedYear.innerHTML = '<b>Published:</b> ' + book.items[i].volumeInfo.publishedDate;
                div.appendChild(publishedYear);
                // create element for publisher
                var publisher = document.createElement('p');
                publisher.innerHTML = '<b>Publisher:</b> ' + book.items[i].volumeInfo.publisher;
                div.appendChild(publisher);
                // create element for description
                var desc = document.createElement('p');
                desc.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(desc);
                // create a tag to target book link
                var link = document.createElement('a');
                link.innerHTML = 'View more';
                link.href = book.items[i].volumeInfo.previewLink;
                div.appendChild(link);
                // create hr to seperate every book info
                var line = document.createElement('hr');
                //make every elements as children of bookResult
                bookResult.appendChild(wrapperDiv);
                bookResult.appendChild(line);

            }
        }
    })
}