## Hoover Maneuver

This is a terminal application that navigates an imaginary robotic hoover through an equally imaginary room. 

The input is in the form of a text file (input.txt) that resides in the same directory as the program and will contain the following information:

* Room dimensions as x and y coordinates
* Hoover's initial position
* Locations of patches of dirt (also defined by x and y coordinates); one per line
* Driving instructions as cardinal directions (N, E, S, W); at least one

The output will be printed in the terminal and will be the following:

* The final hoover position
* The number of patches of dirt the robot cleaned up

in the form of
```
x y
int
```

## How to Run the Program
* Ensure that node is installed <https://nodejs.org/en/download/package-manager/>
* Clone this repository
* Run the program by typing ```node hooverapp.js```into the terminal

