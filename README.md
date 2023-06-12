# Travel Agency

<img width="1437" alt="Captura de Tela 2023-06-12 às 19 15 55" src="https://github.com/natividadesusana/travel-agency/assets/95102911/9f76cf18-812d-4aac-862f-b22c34d21311">

Demo: https://projeto18-freela-front-rust.vercel.app/

## ℹ️ About

Travel Agency is a small travel agency that aims to make life easier for our customers, providing information about tickets and accommodation for the best destinations.

The goal was to practice creating a website that provides a digital experience for users. The site does not sell tickets and accommodation, it only lists the available options so that customers can assemble their ideal trip. It is not necessary to have an account to access the information. When selecting a city, separate ticket and accommodation options will be displayed in different areas of the site.

## 🛠️ Technologies
<div> 
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" /> 
<div>
<br>
I chose to use React.js as one of the most popular web development libraries today, providing a scalable and maintainable framework for building modern web applications. I used React Router to manage the application's routes. Axios was used to make API calls and search for information about tickets, accommodations and cities. I used Styled-Components to create the user interface and provide a nice and intuitive experience for users.

## ⚙️ Features

- Search by City (/):
On the homepage, users can perform a search by city. On this screen, we provide information about the site and the steps to use it. We also feature an attractive background image to create a holiday atmosphere.

- List of Tickets (/flights/:destination):
On this screen, available tickets for the selected city are displayed, with the option to filter by price.

- Ticket Details (/flights/:destination/:flightId):
When clicking on a ticket from the list, users are redirected to this detail screen, where they can view all information related to the ticket, such as airline, city of origin, city of destination, departure time, arrival time and ticket price. ticket.

- List of Accommodations (/hotels/:destination):
On this screen, users can see a list of available accommodations for the selected city, with the option to filter by price.

- Accommodation Details (/hotels/:destination/:hotelId):
When selecting an accommodation from the list, users are redirected to this details screen, where they can view images of the hotel, features and amenities available, name, description and daily rate.

## 🚀 Next steps
- Implement a login system for users to save their information and history
- Add the functionality to rate and comment on tickets and accommodations
- Implement an administrative panel to manage tickets, accommodations and cities

## 🖇️ How to Run
To run this project locally, follow these steps:

1. Clone this repository: https://github.com/natividadesusana/travel-agency.git
2. Install dependencies: npm install
3. Run the development server: npm start
4. Go to http://localhost:3000 in your browser to see the application running.

## How to Contribute
Contributions are always welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or pull request.
