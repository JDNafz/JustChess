## Chess Solo Project for Prime Digital Academy

this is a big work in progress, if you're seeing this, I probably asked you for help looking over my code.

# To start things up run:
- `npm install`
- `npm run server`
- `npm run client` (in a separate terminal window)

server and client should refresh automatically on any changes made.


---

# Feedback Form

## Description

_Duration: 2 Day Sprint_

I created a functional survey that you click through each prompt one at a time. It takes in the users input and submits it to a database at the end of the survey. There is also an admin page, which allows the admin to view all of the survey submissions and delete any that are not needed anymore.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://protected-headland-20056-bc39f8c233d3.herokuapp.com/#/)

## Demo

example: | |
:-------------------------:|:----------------------:
![example gif](public/images/feedback.gif)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/v1.php)or [PgAdmin](https://www.postgresql.org/download/) (optionally included in Postgres installation)

## Local Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.
3. Open up your code editor of choice and run an `npm install`
4. Set your connection point to local-pool to connect ot your own database.

   > line 3 _comment this one out_ //neon database pool config

   > line 4 _use this line_ //local pool config

5. Run `npm run server` and `npm run client` in two terminal windows.

## Usage

How does someone use this application? Tell a user story here.

1. A user may want a place to record their feelings and understanding of new material learned today.
2. This web app is a place to fill in a rating to log or journal their experiences daily.
3. User may type in a number between zero and five to answer the questions
4. To view all the entries users may hit the 'a' key while on the submit success page to view the admin page.
5. From the admin page, individual entries may be removed as well.
6. To return to the survey from the admin page, user may hit the "Alt" key.

## Built With

- PostgreSQL
- Express
- React
- Redux
- Node.js

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

Thanks to my Instructor Andrew Harasymiw, student life Manager Megan Mikhelson, and code coach Kevin Burk






