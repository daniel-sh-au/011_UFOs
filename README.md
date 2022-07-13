# Module 11: UFO Sightings with JavaScript

## Overview of the Analysis

### Purpose
To provide more in-depth analysis of UFO sightings, the webpage will be modified to filter for multiple criteria at the same time. In addition to the date filter, the table will also allow filtering for the city, state, country, and shape columns. 

### Resources
* Visual Studio Code, Javascript, HTML
* Bootstrap CSS Library
* Data Source: [data.js](https://github.com/daniel-sh-au/UofT_DataBC_Module011_UFOs/blob/main/static/js/data.js)
* Challenge Code: [app.js](https://github.com/daniel-sh-au/UofT_DataBC_Module011_UFOs/blob/main/static/js/app.js), [index.html](https://github.com/daniel-sh-au/UofT_DataBC_Module011_UFOs/blob/main/index.html)

## Results
The steps for using the search criteria of the UFO webpage are listed below: 
1. Upon entering the webpage, locate the Filter Search area of the webpage (See the below image in the red box). Observe that each filter has a corresponding input box. 
![webpage01.png](https://github.com/daniel-sh-au/UofT_DataBC_Module011_UFOs/blob/main/static/images/webpage01.png)

2. In the corresponding input box, type in the date, city, state, country, and/or shape to be filtered. Once entered, press the *enter* key on the keyboard or *left-click* outside the current input box to show the results. Note that multiple filters can be used to filter out UFO sightings. Three different filters, seperated by colour, are shown in the image below. 
![webpage02.png](https://github.com/daniel-sh-au/UofT_DataBC_Module011_UFOs/blob/main/static/images/webpage02.png)

## Summary
One drawback to this new webpage design is the lack of flexibility for selecting dates. Currently, only one date can be filtered at each time and the user must perform multiple searches for multiple dates. It would be more convenient if users could input a start and end date for filtering date ranges. 

For future webpage development, it would be beneficial to allow users to enter a date range when filtering UFO sightings. This is especially useful if more data was added to the dataset. This can be completed by adding two input boxes and only displaying the dates between the range. Another recommendation is to allow users to submit their own UFO sightings directly into the webpage. This can be done by adding a section with input boxes so the user can enter corresponding data and adding a submit button to append that data into the data object. 