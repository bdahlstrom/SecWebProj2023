# Recipe Search App

This app assists you finding recipes by executing searches by ingredients you'd like to use.

This app was created as a project for Secure Web App Development class.

This app is designed to assist with receipe searches using an API at https://www.edamam.com/

This app also utilized Firebase (https://firebase.google.com) for build deployment.

Secure Web Development Project 2023

# Installation

From application-project (root), run the below

To install Axios, the HTML library used:  
    
    npm install axios
    
To launch from your terminal to your local network:  

    npm start

To deploy, you can utilize the following commands:
    
    To install Firebase, for use in deployment:  npm install firebase
    To install Firebase CLI:  npm install -g firebase-tools

You'll need a production build:

    For production build: npm run build
    Set up an account and project at https://firebase.google.com.
    To setup for deployment:  firebase login
                      Also :  firebase init

Firebase:

    Choose hosting only by using the up and down keys in the terminal and choosing 'hosting' with the space-bar (the circle will fill-in with color), then press enter.
    Chose 'N' when asked about overwriting information.

Deployment:

    firebase deploy

And your website is live!
                                




# MockUp

![image](https://github.com/bdahlstrom/SecWebProj2023/assets/144755717/09590a03-8e4c-4170-9e44-ee45f02f0882)



# Architecture 

![image](https://github.com/bdahlstrom/SecWebProj2023/assets/144755717/b2c1cab6-e427-43da-bbdc-75113fa1a6aa)

![image](https://github.com/bdahlstrom/SecWebProj2023/assets/144755717/db9b5743-7700-4533-8b78-24f919c72a05)

![image](https://github.com/bdahlstrom/SecWebProj2023/assets/144755717/7c444d80-ad17-4ad4-bb51-4ffa4d53fab4)




# User Stories

As a parent, I want to be able to get ideas for recipes quickly so that I can spend less time figuring out what to feed the kids.  The application assist with this by providing efficient code for a timely delivery of information as well as being mobile device friendly or accessible.

As a life-partner, I want to be able to efficiently find recipes so that I can spend less time fighting with my partner about what we are going to eat.  The application provides easy options and selections to choose from so that the user can get to the details that they really need, unlike a basic search outside of this application that may provide much extraneous information.

As a poor and hungry person, I want to be able to use the protein I have in my storage so that I don't waste food or money.  Searches are possible by using protein specifics, such as 'chicken' or 'beef' and images indicate the overall complexitiy or ingredients utilized in the dish.

# Mis-user stories

As a malicious hacker, I want to be able to reroute those accessing recipes to my fake website using ARP cache-poisoning so that I can get any amount of user's information.  Features on Firebase are available to mitigate against security threats, such as adding 'authentication,' something I'd like to add in future iterations.


# Getting Started

From the search bar, type in whatever ingredient you're trying to use.

For example, using a search for 'Asparagus' will get you recipes that include 'Asparagus.'  

Results will be displayed and clicking with titles and pictures.

Click on any image to be taken to a webpage compiled by edamam.com that provides additional information, such as ingredients and directions, as well as the opportunity to save that information for later review.


# License

MIT License

Copyright (c) 2023 bdahlstrom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.






