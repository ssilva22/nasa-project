# nasa-project



## DEMO



https://user-images.githubusercontent.com/80421938/148817014-478a4eeb-18c2-4b61-a4cf-7a317e756d43.mp4




## Built With
* React
* MongoDB
* Express
* Docker
* Github Actions
* SpaceX API

## About the Project

<p>This project is a static website which integrates the SpaceX API and Nasa's kepler exoplanet database into a MongoDB cluster on a REST 
Node.js server that allows you book space travels to the exoplanets most similar to earth

  The static website structure is composed of the client and the server . The client is the frontend part of the project and the server is the backend . The backend server is built with node.js and uses an MVC structure . There are many ways of deploying MERN applications , one is to use the library "concurrently" and connect both client and server and make them run at the same time . This app does not use that method. Instead, it runs an optimized build of the frontend and serves it directly through the express server. This streamlines the deployment process and separates concerns by only worrying about one server instead of two servers running at the same time .
  
This project also has a CI/CD pipeline through Github Actions that automates the workflow for common deployment tasks. It also has a Docker Image ready to be served on an AWS EC2 instance or any other cloud tool of your preference for deploying dockerized applications.
  


</p>





## 🚀 How to use
1. Clone the repo
   ```sh
   git clone https://github.com/ssilva22/react-native-app.git
   ```
2. Install npm packages
   ```sh
    cd {name of cloned repo}
    npm install  OR yarn install
   ```
3. Setup environment variables
   ```sh
    cd server
    touch .env
   ```
4. You will notice a .env file has been created, open it in your text editor of preference and do the following:

      ```sh
    PORT: {Desired Port}
    MONGO_URL: {MONGOURIconnectingToYourCluster}
   ```
5. Go to the project's root directory and start the server:
  
     ```sh
      npm run watch OR yarn watch
   ```
   
 <strong>If you want to run the backend server only: </strong>
  
    ```sh
      npm run server
    ```
    
  <strong>If you want to run the frontend server only: </strong>
   
    ```sh
      npm run client
    ```
   

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

