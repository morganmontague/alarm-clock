# Pseudocode
### AlarmClock

An alarm clock is a way to keep track of time with the addition of an option to set a specific time to sound an alarm.
- The alarm clock should be keeping track of time and displaying the time on the screen, and you can input an alarm to specify a time you want to be alerted to.
    - I will set up the page with a header section for h1 Title
    - A main section with two sections
        - The top part will display the time.
        - Need to get the minutes and hours and make them presntable
        - The bottom will have the alarm section where you can input the desired alarm.
            - The am/pm will need a check to determine which is selected.
           - if not specified will not run.
            - the input should allow between 1-12 and a seperate am/pm option.
        - Modify with padding and alignment to make the clock not seem cramped. 
- The alarm clock will be able to read the inputs and determine when to activate the alert.
- *stretch goal, add a snooze (bump ten minutes) or 24 hour clock*
----
let clock equal the the time displayed
let alarm be the function to add to the clock with an addEventLister on click to signify the alarm confirm the alarm time was set.
Using get hours and get minutes, will display the current time. 
Once the current time =  alarm time alert will declare the alarm is done