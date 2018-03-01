# hacktivpress
Simple Blogging Platform

Description: Simple blogging app, user can read & post an article within this app.

How-to:
1. Open terminal and go to this app path
2. Run api by entering `npm run dev`

| Route                         | HTTP Method   | Usage                           |
| ----------------------------- |:-------------:| --------------------------------|
| /api/users/signin             | POST          | login for user                  |
| /api/users/signup             | POST          | register new user               |
| /api/articles/                | GET           | show list of all articles       |
| /api/articles/                | POST          | post new article                |
| /api/articles/user/:id        | GET           | show list of user's articles    |
| /api/articles/category/news   | GET           | show list of all news articles  |
| /api/articles/category/reviews| GET           | show list of all review articles|
| /api/articles/detail/:id      | GET           | show detail of an article       |
| /api/articles/edit/:id        | PUT           | update an article               |
| /api/articles/delete/:id      | DELETE        | remove an article               |