## Reddit Slim
---
Codecademy challenge project. Done by pkostek.

## 1. Overview

 This project is mainly focused on following libraries:
- react-redux
- @reduxjs/toolkit
- react-html-parser - *this library has created dependency issues which are partialy resolved in this project*

## 2. Main Features

 1. Loads top 5 Hot posts from selected reddit channel
 2. Allows to load comments for every loaded post.
 > If number of comments exceeds certain number and needs additional fetch (reddit requires to load more) - then excessive comments are hidden
 3. Searchbar allows to filter loaded posts. Post will be only shown if the search term is present in its title.
 
## 3. Responsive design

For screens below 650px width the sidebar is substituted by a dropdown list. 

## 4. Features to potentially add in the future
 - Input field in the sidebar that allows to add a new subbreddit to the list
 - Add buttons which will allow to load different number of posts from the subbreddit (e.g. 5, 10, 20)
 - Change the color scheme to more appealing one ^^




