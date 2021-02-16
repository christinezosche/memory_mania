# Memory Mania!

This app allows users to play various customizable memory games, including a GIPHY-powered game that includes gifs from a user's search criteria, a game featuring photos from the top stories on the New York Times homepage, and a game featuring photos from trending TV and movies, powered by The Movie Database. Users can also create their own games by entering image urls. Finally, stats are recorded on all games and displayed.

For a demo, visit: https://youtu.be/jebYKNGKOo4

## Installation and Usage

Fork and clone this repo. Cd into "memory-mania-backend". Run `bundle install` to install required gems. Run `rails db:migrate` to migrate tables, then run `rails db:seed` to seed the preloaded game templates. Run `rails s`. Be sure that the Rails server is running on http://localhost:3000.

Then, cd in to "memory-mania-frontend". Run `npm install` and `npm start`. Be sure that npm is running on a port other than http://localhost:3000.

## Development

In the "project-backend" folder, run `rails c` to experiment with the code for the API.

In the browser, with the app running, right-click the page and select "Inspect", "Inspect Element", etc. to experiment with the JavaScript code in the browser console.

## Contributing
Bug reports and pull requests are welcome on [GitHub](https://github.com/christinezosche/memory_mania). 
    
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
This code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
