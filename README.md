# [Beats](https://grbegur.github.io/Beats/)
> Simple, custom beat mixing web application



## Description:
This web application provides a platform where one can mix set of pre uploaded sounds and create their own beats. There are a set of interval tiles which can be selected and a tempo slider is also present to set number of beats per minute. The selected tiles are run in loops to create a new beat out of existing sounds.


## Technicalities of project:
*  HTML:  Is divided in to three parts, heading, tile selection part, (play button & tempo) selector part.
*  CSS:  Both Flex and Grid are for lay outing tiles. Transformation and transition on tiles is for better UI. 
*  JavaScript: setInterval concept is used to loop around selected tiles and input tag with range value is use as a tempo slider. To reduce HTML overhead all selection tiles are rendered using JS.