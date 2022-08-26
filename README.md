# Using my nc-news app

## Description of App

This front-end app **nc-news**, is the culmination of a one week solo project
undertaken as part of the Northcoders (hence nc-news) bootcamp. The App makes
use of a previous one week solo back-end project where we designed API's to
serve up news and related user generated content, which is now available to
users in the form of a responsive app. The project was created using react
(along with may more) skills developed during the 3 week front-end section of
the Northcoders Bootcamp.

All of the the app's pages contain navigation via the main navi-bar in the app's
header that will take you to: _Home_ _Articles_ _Users_

In addition, the main header also displays the current user.

The homepage allows the user to browse the all of the news articles by topic
(the topic bar updates automatically if new topics are added). The home page
also includes space for a number one featured article (_watch this space_).

Articles Page: All of the articles on the articles page (and when viewing by
topic) are clickable, and will take you to an individual article page where you
can see the article in full, view and post comments associated with the article
and also up and down vote the articles. The owner of any comments can also
delete any comments that they've posted.

Articles on the articles page can all be sorted, by ascending/ descending order
and sorted by; author, title, topic, time-stamp, votes and comment count.

Users Page: The users page allows the users to see and toggle between the
available users to post and delete comments as neccesary. The users are all
identified by name, username and have an personal avatar.

## Front-end

URL front-end app: `https://nc-news-rb.netlify.app` Git Repo front-end:
`https://github.com/RaymondBibby/nc-news`

## Back-end

Resources for the back-end:

URL back-end API: `https://be-nc-news-rayb.herokuapp.com/api` Git Repo back-end:
`https://github.com/RaymondBibby/be-nc-news`

## `node minimum requirements to run the project locally`

Before running the project locally please ensure that you are running at least
node v16.15.

## Running the project locally

To run the project locally, please follow the steps outlined below:

1. Move to a local directory where you wish the repo to be rooted using the CL.
2. On the CL run: `git clone https://github.com/RaymondBibby/nc-news.git`
3. On the CL run:`cd nc-news`, this should default to the main branch.
4. On the CL run: `npm i` to install all node dependencies.
5. To run the project locally on your browser run: `npm start`

**Note: this is a still a live project. You can think of the app as
`still under construction`, with other features still to be added!**
