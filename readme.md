# Whatflix

# Brief explanation of what the app is and what it does
Whatflix is a webapp that helps the user find the right movie to watch based on their selected criteria. The user can browse through a catalog of movies, see the movie information, such as the year, revenue, and cast. Also, the user can save favorite movies to their own "to watch list".

# Link to live site
Demo: [Link](https://whatflix-app.herokuapp.com/)

# Technologies used  
      
## Backend: Node, MongoDB, TMDB API, Express   
 
Node.js makes it easy to allow multiple events to occur concurrently by utilizing Javascript's asynchronicity. So using node will be essential for being able to filter movies by each option the user selects. Node will be used to configure the app's server.

MongoDB is a document-based NoSQL database that is scalable and flexible. That being said, it would be the best and most practical option when it comes to seeding our database. Since NoSQL databases are distributed, which means they are collections of multiple, logically interrelated databases, it will be helpful in terms of associations.

TMDB API is a RESTful web service to obtain movie information, which will be a great help when it comes to seeding our database.

Express is a web application framework for Node that will be used in this project to write handlers to respond to different HTTP verb requests at different URL paths.

## Frontend: Axios, React and Redux

Axios will be used to make frontend AJAX calls, this means that it will be possible to make XMLHttp Requests from the browser or HTTP requests from the Node environment.

React and Redux will be used to render each component of the website, at every request to filter the movies.

# Some features and challenges faced

## Implementing the API:
 
One of our main features is the ability to browse a catalogue of new and old movies. We considered populating our database with our own seeds but it would be very limiting and time consuming. We then decided to use an API named “The Movie Data Base” (https://www.themoviedb.org/). This allowed us access to an ever expanding database of movies that we could use to populate our site. It’s implemented throughout or site including our endless browse page and displaying the cast of every movie.
The code snippet below shows the way we were able to fetch a movie from TMDB API.
     
```javascript
<Row gutter={[16, 16]}>
    {Movies && Movies.map((movie, index) => (
        <React.Fragment key={index}>
            <GridCards
                image={movie.poster_path ?
                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : null}
                movieId={movie.id}
                movieName={movie.original_title}
            />
        </React.Fragment>
    ))}
</Row>
```
  
## Using React Hooks:

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. This hook was used to implement the autoscroll, so that way the user can scroll down to the bottom of the movie catalog page and it will render more movie posters automatically. The action of rendering more movies was also due to useEffect, by fetching the movie through the right url.
The code snippet below shows how we used this feature:

```javascript
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
```

