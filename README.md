# VLT-AUTO

For this exercise, I decided on a mock Used Car Lot theme.

Relevant parts of the website pertaining to the requirements: <br>
**Welcome Page:** Home page of the website, just an "About Us" section <br>
**Car Loan Calculator:** The form is at the bottom of the Cars For Sale page, given principal, interest, and time in months, returns monthly payment.

With the additional time over the weekend, a very basic "authentication" was done with popular js cookies script: https://github.com/js-cookie/js-cookie/tree/latest <br>

On the "Contact Us" page, users can "sign up" for a newsletter. What this actually does is just store their name as cookie for identification back on the home page. Upon returning (once per session), users should be prompted with a "Welcome Back (Your Name)" alert.<br>

~~NOTE: Unfortunately some browsers such as Chrome (majority of the testing was done here), do not store cookies for local websites/files, so authentication will not work. When tested on IE, functions as it should. As this was just for "extra credit" no fix for Chrome was implemented.~~

Update: Initially I had interpreted the project as local website exercise, however publishing to Github Pages as resolved the above issue and the website is live. This also means a better approach for authentication can/should now be done, but for the scope and timing of this project, no changes have been made.
