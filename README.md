# The Poeple of Star Wars

This application will allow you search through and view all the people from the Star Wars unviverse

## Use

A person can looked up using the search bar at the top of page. To view a person simply click on their name. Each person has their height, weight, species, birth year, homeworld, and the films they appeared in.

# Question Response

Here I will be answering the questions posed in the original readme.

## What design patterns did you use?

I attempted to maintain a structural design pattern, keeping the person type relatively small and building the application up from there.

## How would you test your application?

I would have liked to build out more testing into this application but unfortunately ran out of time. With more time I would have liked to build out testing to verify the search function, the api interface, and basic rendering.

## How do you manage/store application state?

I attempted to keep the application state as easy to manage as possible. The only two inputs the user has are clicking name cards and typing in the search bar. By using the accordion to organize my people cards I give the user access to 1 person at a time to prevent too much information from being displayed on the screen at a time. Additionally by using a simple filter with the search bar I removed the need to over complicate things with additional buttons.

## What ways could you structure the code to make it easy to understand and maintain?

I kept the code easy to understand an maintain by, following best practies to the best of my knowelge, adding helpful comments, and by grouping like functions such as keeping the getPerson function in the api file to remove clutter from the people file.

## What other considerations and tradeoffs did you make when building the application?

Time was a very restricting factor for me. I would have liked to add additional user functionally such as being able to search by species or film appearances and I would have spent more time with the layout and design of the user interface. Rather than focusing on extraneous features I focused on building a robust fault tolerant base that accomplished the tasks set before me.

## How are you describing and typing API data?

I did my best to keep the api data interface as minimal and dynamic as possible. I took only what I needed and discarded the rest to prevent bloat.

## Timeline

6/18 - 6/21 Project received, on vacation unable to start
6/22 - 6/24 Brushing up on JavaScript, learning React
6/25 Design general layout
6/26 Build out Person cards
6/27 Build out api interface
6/29 Build out search functionality
6/30 Traveling, no work
7/1 Finshing touches, bug fixes

## Additional Comments

This was the first time I have used React and the first time I've used JavaScript in a long time, so a large amount of my time was spent learning and reading up on the documentation. I enjoyed working on this project, I always love digging into new skills.

There are definitely areas of this application that need a lot of work. The api interface is very slow and needs some serious optimization. There are several things on the front end that need fixing such as the background. Additionally, I did not have enough time to build out any testing which is an essential part of application health.

Thank you for taking the time to review my work, and I look forward to hearing from you
