<img src="https://user-images.githubusercontent.com/62361039/103285701-28719880-49df-11eb-8691-7f77accac6e5.png">

# `THE FLASH`

 We tend to think that memory, attention or concentration are skills that we have, in which some people have more facility in them than others. However, these skills can be exercised. Are you ready for the challenge?



 ## UX

 This project is about a memory game. The purpose of this website is to test the user's mental speed to remember cards.


 **User Stories:** 

 - Be captivated with the design 
 

 - Play the game and try to pass it until the time it's over.

 - Be aware of the merits and mistakes.

 


 **Business Goals:** 

 - Attract users who want to play the game.

 
 **Wireframes**

 I decided to use the Balsamic tool for creating the mockups because it gave us the first impression of our project and a  clear idea of what we want to work.


 ![image](https://user-images.githubusercontent.com/62361039/108623961-273e7400-7442-11eb-99a3-c659314d1b14.png)

 ![image](https://user-images.githubusercontent.com/62361039/108624008-5e148a00-7442-11eb-95bb-15db80c08df9.png)

 ![image](https://user-images.githubusercontent.com/62361039/108624047-974cfa00-7442-11eb-8714-a16f1917cb0e.png)


 ### Features 

 - Flashy images or any other media to motivate people to visit the website and play the game.

 - Provide good quality images and great design, as well as an entertaining game.

 - Provide a timer to challenge the users.


 - Provide scoreboard with the errors and merits.

 - Provide an error message and well done.

 ### Potencial Futures to implement 

 - **Play Button**: Button to re-start the game: Allow the user to start again.

 

 ## Technologies Used

 This project was created with the following technologies:

 -  [HTML](https://es.wikipedia.org/wiki/HTML) 
    - **HTML**: The language used to create  and add the content to the website

 - [CSS](https://en.wikipedia.org/wiki/CSS)   
    - **CSS**: The language to desing the page and add the stylish to HTML content 

 - [BootstrapFrameworks](https://getbootstrap.com/)  
    - **Bootstrap frameworks**: Build fast, responsive sites with design and responsive mobile-first sites. 

 - [Balsamic](https://balsamiq.com/) 
    - **Balsamic**: The tool that allows you to prototype your projects.
 - [GoogleFonts](https://fonts.google.com/)  

    - **Google fonts**: Essential typography resource for digital creatives.
 - [FontAwsome](https://fontawesome.com/)
    - **Font awsome**: A tool that contains font icons and social logos for a website.

 - [Gitpod](https://www.gitpod.io/)
    - **Gitpod**: Tool used to create, write and edit source code. Live pre-viewing.

 - [GitHub](https://github.com/)
    - **GitHub**: Tool used to hosting the repository's projects.

 - [W3C Schools](https://www.w3schools.com/)
    - **W3C Schools**: Web Developer informative Site

 - [JavaScritp]( https://en.wikipedia.org/wiki/JavaScript)
    - **Java Scritp**: A programming language that enables interactive web pages and is an essential part of web applications.

 - [JQuery]( https://jquery.com/)
    - **JQuery**: The project uses JQuery to simplify DOM manipulation.


 
 ## Testing

 The testing process consists of opening the game on different devices, checking there are no errors, checking responsible design,  and if all programmed functions are executed correctly.
 Below are all the devices used for this testing process:

 1.Hp 

 - Google Chrome
 - Firefox
 - Explorer

 2.Macbook 

 - Apple Safari
 - Google Chrome
 - Firefox
 - Explorer

 - Mobile: iPhone 6, 8 & 11.
           Galaxy s5 
           Motorola  g4 
 - Other:  iPad Pro

 ### Testing User Stories 
 
-**Home page**: If the user navigates to the home page. Different sections such as "how to play" and "play the game" will appear. By clicking on the different buttons, the page is redirected to each section and the relevant information is displayed.

-**How to play**: "Button" to explore the game instructions, clicking on it will open a modal tab with the game instructions. At the bottom, there is also a closing section to escape if you press off the page the modal section disappears.

-**Play game**: This section contains a "how to play button", clicking on it will open a new tab and start the game.

-**Time**: When the game starts, the counter also started counts down for 35 seconds. This is the time the user has to complete the game.

-**Match**: When the game starts we have the opportunity to reveal two cards and check if there is a match, which means that they are identical and we add 1 merit.

-**Mismatch**: When the game starts, we have a chance to reveal two cards if they do not match, it means they are not identical and we have a mismatch and add 1 error.

-**Score**: The score panel appears above the memory table and shows how many merits and errors the user has according to the cards displayed, the match, or the missing match.

-**Win**: When the user manages to reveal all the cards in less than 35 seconds, it means that I win the game.

-**Game Over**: when the user cannot reveal all the cards due to lack of time.

-**Play Again**: This section opens when the game ends, either winning or losing, and allows you to start the game again.

-**Home Page**: This section opens when the game ends, either winning or losing, and allows you to return to the main page.


 ### Validator 

 This project was validate through [ W3 CSS validator](https://validator.w3.org/) ,  [W3 HTML validator](https://validator.w3.org/) and [JSHint](https://jshint.com/).
 - ![image](https://user-images.githubusercontent.com/62361039/108630400-f91e5b80-7464-11eb-97af-aeed4cbc1443.png)

 - ![image](https://user-images.githubusercontent.com/62361039/108630439-308d0800-7465-11eb-9124-814e09f2f270.png)

 - ![image](https://user-images.githubusercontent.com/62361039/108630489-55817b00-7465-11eb-8421-762103f65347.png)



 - The following errors were displayed in jshint: 
 ![image](https://user-images.githubusercontent.com/62361039/108629627-1bae7580-7461-11eb-9f08-15ee597716dd.png)

 - They were solved by adding to the top of the script file the following comment "/ * jshint esversion: 6 * /" to tell jshint the use of ES6.
 ![image](https://user-images.githubusercontent.com/62361039/108629998-f4f13e80-7462-11eb-80de-c5f1b836b430.png)



 ### Bugs

 The Document Checking was completed. There were no serious errors or warnings to show other than a "}" missing at the end of the  CSS  file from the .map-container iframe class "{".

 ### Testing Features

 - **"How to play" button**: Go to the home page.
 Click on "How to play" and a box it's going to appear with the information. 

 - **"Play game" button**: Go to the home page and click on the button, which will redirect you to the game.

 - **"Back to the Homepage button"**: Go to the button and click on it, will redirect you to the home page.

 - **"Play again" button**: 
 Go to the button and click on it, the game will start again.

 ## Deployment

 This project was created on GitHub and used the GitPod development environment to write the code. 
 To deploy it we have to follow the following steps:
 - Open the 'Settings' section of the project repository on GitHub.
 - From there, click on the 'GitHub Pages' section.
 - Selected 'master branch' as ​​a source.
 This implemented the project on the GitHub pages and will make it possible to share the website live with other people.

 
 ## Credits

 ### Content
  This game is completely fictional and was created by myself.


 ### References

 - [StackOverflow](https://es.stackoverflow.com/)
   
    - **Stack Overflow**: An informative website for professional and hobbyist programmers. Help me to fix the bug mentioned in the "Bag section".
 - https://marina-ferreira.github.io/tutorials/js/memory-game/
 - Introduction to JavaScript Programming, domestica course -  Javier Usobiaga Ferrer
 - https://foobar123.com/create-memory-game-with-javascript-a53b0059f0d
 - https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563


 ### Media
 - The photos, emojis and sounds used in this site are taken  from a following places :

 - https://wallhere.com/es/wallpaper/51497
 - [Whatsaap](https://www.whatsapp.com/?lang=es)



 ### Inspitional Sourses 

 I received inspiration for this project from the following pages

 - Introduction to JavaScript Programming
 - https://marina-ferreira.github.io/tutorials/js/memory-game/



 ### Acknowledgements 

 • I would like to say thank you to my mentor [Can Sucullu](@cans_mentor) and Codelnstitute's Slack community for the support.
