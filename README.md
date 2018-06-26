## Face recognizer app created in React.

This app accepts the URL for a picture and will determine whether there are faces in it. A blue box will appear around each face that is detected by the algorithm.

The front end is made with React while the back end is handled by Express. The database used in this app is PostgreSQL.

The app is hosted on Heroku and can be viewed at: https://dry-inlet-52104.herokuapp.com/

**Main Technologies Used**
1. React
2. React Router
3. Clarifai API with the demographics model
4. Styled Components
5. Axios
6. PostgreSQL
7. Node
8. Express

**Changes Currently In Progress**
* Improve styling of all components, particularly the Face Recognition and Image Link Form components.
* Expand app to also include the estimated age of each face recognized. Display ages above the faces.

**Upcoming Changes**
* Clean up / optimize code
* Implement validation for all forms
* Display errors in the front end (currently only displayed in the console)
* Display loading indicator (spinner, etc) when waiting for API response