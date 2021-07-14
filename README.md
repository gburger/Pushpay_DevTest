# The People of Star Wars
This application will allow you search through and view all the people from the Star Wars unviverse

## Use
A person can be looked up using the search bar at the top of page. To view a person simply click on their name. Each person has their height, weight, species, birth year, homeworld, and a list of the films they appeared in.

# Question Response
Here I will be answering the questions posed in the original readme.

## What design patterns did you use?
I attempted to maintain a structural design pattern, keeping the person type relatively small and building the application up from there.

## How would you test your application?
I built out testing to ensure that all the components render correctly as well as verifying the search functionality

## How do you manage/store application state?
I attempted to keep the application state as easy to manage as possible. The only two inputs the user has are clicking name cards and typing in the search bar. By using the accordion to organize my people cards I give the user access to 1 person at a time to prevent too much information from being displayed on the screen at a time.
## What ways could you structure the code to make it easy to understand and maintain?
I kept the code easy to understand and maintain by, following best practices to the best of my knowledge, adding helpful comments, and by grouping like functions such as keeping the getPerson function in the api file to remove clutter from the people file.

## What other considerations and tradeoffs did you make when building the application?
Time was a very restricting factor for me. I would have liked to add additional user functionally such as being able to search by species or film appearances and I would have spent more time with the layout and design of the user interface. Rather than focusing on extraneous features I focused on building a robust fault tolerant base that accomplished the tasks set before me.

## How are you describing and typing API data?
I did my best to keep the api data interface as minimal and dynamic as possible. I took only what I needed and discarded the rest to prevent bloat.

## Timeline
* 6/18 - 6/21 Project received, on vacation unable to start
* 6/22 - 6/24 Brushing up on JavaScript, learning React
* 6/25 Design general layout
* 6/26 Build out Person cards
* 6/27 Build out api interface
* 6/29 Build out search functionality
* 6/30 Traveling, no work
* 7/1 Finishing touches, bug fixes
* 7/2-7/5 Backpacking, no work
* 7/6 Review
* 7/7-7/8 Api interface rewrite
* 7/9-7/10 sick
* 7/11 Search function and re-organization
* 7/12 More re-organization and learning react testing library
* 7/13 Tests build out

# Feedback
In this section I will discuss how I addressed the cons list from my original submission
 
### All the people data was retrieved during the initial load - this resulted in over 800 API calls before the list of characters was displayed
I rewrote the initial load to pull the people list in by page rather than by individual, and then begin to load the additional information after the name list is populated. This resulted in a much quicker start-up with only 9 api calls before the list is displayed.
 
### No additions were made to the react component architecture - all the display is handled in the Person component - data handling was done in the People component
I attempted to break down and separate the components more. I moved the search bar and its supporting function to its own componente. Additionally I separated out the person cards into an over arching person component that handles the accordion and the additional information call and a person body component that only deals with the display of the information. I bubbled up all the data handling and control to the App component to keep the sub components easy to understand and maintain
 
### The search functionality was just a filter of the initial data return
I broke the search bar out into its own component and wrote a simple search function that just scrolls through the list of people and pushes hits onto a seperate list for display.
 
### No tests
I added tests to ensure that all components rendered correctly as well as tests to ensure the search bar function worked correctly. I would have liked to add more tests to test the API interaction but ran out of time. This was my first exposure to the react test library, in future I hope to embrace a much more test driven design development model.
 
### The people API function has a lot of mutation going on, which makes it really hard to track changes, and the TypeScript types aren't used very effectively here.
I completely rewrote the API interactions so that they are broken out into much more concise functions that are much easier to read and maintain.
 
### For all the logic that's in that api method, there's still quite a bit of extra logic in the People component to parse through the people response. The concerns aren't very well separated.
I removed all of this logic so that the App component is much easier to understand and maintain.
 
### Mixed a lot of logic (mapping, filtering) into JSX, which makes things pretty unreadable and harder to reason out
I moved almost all of the logic from the JSX into their own files and functions for keep the componentes clean and readable

# Additional Comments
This was the first time I have used React and the first time I've used JavaScript in a long time, so a large amount of my time was spent learning and reading up on the documentation. I enjoyed working on this project, I always love digging into new skills.
Thank you for taking the time to review my work, and I look forward to hearing from you.

