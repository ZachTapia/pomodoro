# PomoDo-it

Live at: [https://pomodoit.now.sh/]()

PomoDo-it is a productivity timer built using React.js (Hooks) and Next.js. PomoDo-it implements the [Pomodoro Technique](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730) to boost productivity and focus. When faced with a large task or series of tasks, PomoDo-it breaks down the work into short focused sprints (called "pomodoros"). Small pauses occur in between pomodoros providing the user a break. This method trains the brain to effectively concentrate for a short interval which increases the user's consistency in achieving small tasks, while maintaining focus over a longer period.


## New Features!

- Productivity Tracking, track completed focus sessions!
- Theme selector, choose from 4 additional stylish themes!

## Built with:

<img src="https://user-images.githubusercontent.com/31228341/84543583-7972a700-acb0-11ea-8ff3-9400fe8765f4.png" width="250" alt="React Logo" /><img src="https://user-images.githubusercontent.com/31228341/84543916-277e5100-acb1-11ea-96e9-ed2b91173e42.png" width="250" alt="Nextjs Logo" />

- [React.js](https://reactjs.org), a JavaScript library for building user interfaces.
    - Component based design - React allows you to compose complex UIs from small and isolated pieces of code called "components". Creating components that are designed to be reusable speeds up development time and reduces overall lines of code. 
    - VirtualDOM - React uses its own implementation of the Document Object Model (DOM) called the VirtualDOM. Having access to its own VirtualDOM allows React to quickly and efficiently make changes to the actual BrowserDOM, only changing what it deems necessary. Manipulation of the BrowserDOM is expensive, this extra layer of abstraction is what makes React standout as a high performance JavaScript library. 

 
- [Next.js](https://nextjs.org), a React framework known for many features, but most famously server-side rendering.
    - Pre-Rendering - By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.
    - Easy Deployment - After a long development process, the last thing you want is to have to deal with a complex deployment process. This app was deployed in around 10 minutes, with only a few clicks. This is made possible by Next.js.
    - Developer Experience - Next.js has many built-in features that make development a joy, such as hot reload, intuitive page-based routing system, automatic code splitting for faster page loads, built in CSS and SASS support, and support for any CSS-in-JS library such as 'styled-components'
    
    
## What I Learned...

Creating this application has taught me quite a bit. A few worth mentioning: 
- How to design for both mobile and desktop views.
- Creating flexible and adaptable components that can be reused throughout application.
- How to incorporate a third-party library for a problem that has already been solved.
- Staying motivated and completing a project from initial design, to deployment.

## Improvements
Of course, with everything we create, there is always room for improvement. These are some things I would like to incorporate into this project in future builds.

- Redux - There were situations in development where I felt state wasn't being treated in the most elegant way. The main example I have for this is managing the state of which color theme is currently selected. I feel there is a better way to implement this, possibly with a state management library such as Redux.
- Progressive Web App - I would like to turn this project into a progressive web so that a user would be able to save this application locally and access it without an internet connection.  
