## ⭐ Zagalab Challenge

The purpose of this project is to be able to replicate a user interface that we will call Stepper and that was replicated from an image. On the other hand, another interface was also built that interacts with the Star Wars API.

![Demo Challenge](demo.gif?raw=true "Demo Challenge")

### Technical details

The project was developed with NextJS as the main framework. CSS modules were used for styles and react-icons for the svg icons.
The Star Wars page uses GraphQL and React Query to interact with the API.
The tests were built with Jest and testing-library.

## Local execution with npm or Docker

To run the project locally can be done with npm and the command:
`npm run dev`

To run the project through Docker, run the following command:
`docker-compose stop && docker-compose up --build -d --remove-orphans`
