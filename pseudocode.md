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
We need a few functions to get this to work
* We need to get the local military time.
    * Pull the local current date
    * Use get hour, minutes, and seconds
    * if minutes or seconds are less than 10 then add a 0 in front of the minute of second.
    * Set the inner text of the section with military time to current hours:minutes:seconds.
    * set an interval to run this function every second so it will keep the innerText updated.
*  Now we need to add buttons to confirm the alarm set in the html date/time as well as one to reset the alarm.
    * On changing the date/time will set the alarm input into alarmTime and add null value for alarmTime on the reset button.  
*  Now that we have the alarm time wanted we need to set it to remember it and then will alert you when the time reaches the predetermined time.
    *  create a new date and set the time to the alarmTime. If the alarm time bigger than the actual time (i.e. not in the past) than set a tiemstamp to the difference of the alarmtime and current time.
    *  Have a setTimeout to throw an alert when the TimeStamp reaches the current time, alerting you the alarm is beeping.
---

getmiltTime()
setAlarmTime()
runAlarm()
BEEEEP