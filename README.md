<<<<<<< HEAD
#Bit Blot
* Client: Self
* Dec. 18, 2015 | Version 02

###Document Objectives
The purpose of this document is to provide detailed documentation that clearly defines the work that Prime Student, Charlotte Kroening, will perform and the deliverables you will receive within the scope of this project. By accepting this document you acknowledge your understanding and agreement to this scope of work. Any requirement which falls outside the specifications in this document will be considered "Out of Scope" and may require reprioritization or removal of other features to implement. 

This document takes precedence over any other documentation provided regarding scope of work.

##Scope of Work Feature Details
Bit Blot is a project built to harness and visually demonstrate the unique correlations between user responses and pre-generated imagery. This is an application with an intention to find novel patterns in user responses and to guide the user in an interpretation of these emotional responses via the aid of a visual model of returned user data. 

##Features
The features of this application will be balanced across two views: a basic landing page and a generated results page.

###Main Landing View
This view includes:
*Image Display
*Rating System
*Generate Results Button

#####Image Display:
Images will be displayed in a sliding carousel-style setup utilizing Angular UI. The number of images will be limited to 20 images per session, but the user can opt to complete the submission process at any point with any amount of rated image submissions less than the total limit allowed.

#####Rating System:
The user will have the opportunity to rate each image on a scale of 1 to 5, 5 being most “true” for the user and 1 being most “false” for the user. This scale will be applied to the following categories of evaluation:

*Amount that the user generally “Liked” the image.
*Level of Happiness that the image produced for the user.
*Level of Sadness that the image produced for the user.
*Level of Disgust that the image produced for the user.
*Level of Anxiety or Stress that the image produced for the user.
*Level of Calm or Relief that the image produced for the user.
*Level of Anger that the image produced for the user.

####Mode of Submission:
The landing page view will contain a method for submitting data provided by the user. This method will be in the form of a button resting below the list of rating information provided to the user. Ratings will be submitted via radio buttons in an html form.

####Generated Results View
This view includes:
*Visual Results Display
*Linkage to Main Landing View

###Visual Results Display:
This display component will utilize vector graphics technology to provide a visual representation of data submitted by the user. This representation will also display correlations between related data and will attempt to offer the user an interactive visual map of her or her responses.


This is an example of how the generated results view is intended to appear.
Source


###Display Algorithm & Interface:
*Correlations, or strengths of connections between responses, will be determined by 		grouping together similarly rated input with the use of a correlate() function. This function 	will observe user inputs and match these inputs based on their ratings, for example:
*If a user selected a rating of 5 for “level of happiness” produced by certain images and the user also provided a similar rating of 5 for how much the user “liked” these same images, then a bold link will be created between these two positively correlated response categories, and few other connections will be made outside of that link. 
*A user may also generate results that provide for a strong negative correlation between “disliking” (with a rating of 1) images that also provide a strong level of “disgust” (rating of 5) for the user, for example. This correlation will also be demonstrated with a linking display in the visual results display page, but since the correlation values are opposite, this display will be rendered in a different format, such as by use of a dashed line rather than a bold link.

*In summary, the degree of correlation between response categories will be based on 		evaluations and comparisons of response values. This correlation degree will then be 		displayed with a different method of expression (bold, solid, or dashed line) per degree:

-Strong (positive) Correlation: bold line - both evaluated categories have positively correlated values (ex. “liked” = 5 and “happiness level” = 5) 
-Moderate Correlation: solid, not emphasized line - both evaluated categories have moderately correlated values (ex. “liked” = 3 and “happiness level” = 4)
-Weak (negative) Correlation: dashed line - evaluated categories are near opposites to one another in their value distribution (ex. “liked” = 1 and disgust = “5”)

*All user responses will then be rendered on the visual results display page using the technologies offered by D3, Data Driven Documents. 

###Linkage to Main Landing View:
The generated results view will aim to maintain a slim and concise effect and will include only
the generated results image and a link back to the main page should the user wish to restart the
process. Upon clicking on this linkage, the system will reset and allow the user to begin afresh on the main landing view page.

####Project Milestones
If approval of this Scope of Work is received by The Company no later than Friday, December 18th, 2015 at 12:00pm, development shall become effective on December 19th, 2015, and the following deadlines will become effective. Changes, if necessary, will be reported by Charlotte Kroening via email to Joseph or Antoinette. The Client acknowledged and agrees that The Client's failure to adhere to deadlines will impact The Company's deadlines and estimated cost and, in such instances, The Company will not be responsible for missed deadlines, including final delivery/deployment, and increased costs and expenses.

Milestone
Responsibility
Date
approval of Scope of Work
Prime
12/18/15
wire frame & basic project structure set up
Self
12/20/16
basic front end design complete
Self
1/4/16
construct database for user data
Self
1/4/16
get rating form working
Self
1/5/16
test form with basic input (pre-image based)
Self
1/5/16
build table layout for generated results page
Self
1/6/16
construct database for image stockpile
Self
1/7/16
get image display working
Self
1/8/16
implement vector graphics for results page
Self
1/9/16
troubleshoot and test for any errors in design
Self
1/14/16
Browsers
Application will fully support only the below listed browsers and QA will test only in the following browsers and versions. All browsers or versions not listed below are considered out of scope.

Browser Name
Version
Google Chrome
47 or higher
Mozilla Firefox
42 or higher
Schedule/Meetings

Event
Date
Time
Stand Up Meeting
1/4/16
9:00am
Stand Up Meeting
1/5/16
9:00am
Stand Up Meeting
1/6/16
9:00am
Stand Up Meeting
1/7/16
9:00am
Stand Up Meeting
1/8/16
9:00am
Stand Up Meeting
1/11/16
9:00am
Stand Up Meeting
1/12/16
9:00am
Stand Up Meeting
1/13/16
9:00am
Stand Up Meeting
1/14/16
9:00am
Stand Up Meeting
1/15/16
9:00am

###Assumptions
While completing this estimate the following assumptions were made.
Project is basic design only: a mobile version will not be created at this time and basic functionality is the project’s main goal.
There will not be user management included in this project. Data will be temporarily stored, but a login and registration option will not yet be added.
Image stock is from free sources only.
User cannot make permanent changes to application.
This project will be developed in English only.
This project is intended as a basic starting point for further development as mentioned in the following Stretch Goals section.


###Stretch Goals
This project is intended to be a functional base for further development, time permitting.
Include a user registration and login option.
Include additional rating fields and additional correlation mapping in results page. (see last bullet)
Include content tags on images in order to additionally categorize correlations between image types and image responses.
Allow user to interactively select “Level of Correlation (from lowest strength level,1, to highest strength level, 5)” in the results page so as to evaluate correlations based on their strength of matching ratings as well as based on any correlations already established.
Approvals
Client Signature _____________________________________

Client Name (printed) _________________________________

If approval of this Scope of Work is received by The Company no later than Friday, Dec. 18th, 2015 at 12:00pm, development shall begin by Dec. 19th, 2015.# bitblotv02
=======
>>>>>>> ddac5bce5aea4afa6f7c01cda66b1cc346c27463
# redo
# redo
