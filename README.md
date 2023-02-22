Restaurant Onboarding System
This is a food delivery company's self-onboarding system for restaurants. The system is designed to collect basic details of restaurants and store them in a NoSQL database using a fake JSON server.



Technology Stack
The system is built using the following technologies:
    • Angular for the frontend
    • JSON-Server for the fake database
Getting Started
Prerequisites


Before you begin, make sure you have the following installed on your system:
    • NodeJS
    • Angular
    
    
Installation
    1. Clone the repository
bashCopy code
git clone https://github.com/your_username/restaurant-onboarding-system.git
    2. Install dependencies
bashCopy code
cd restaurant-onboarding-system
npm install
    3. Start the fake JSON server
Copy code
npx json-server –watch db.json 
    4. Start the server
sqlCopy code
npm start
The server should start running on http://localhost:4200.



Usage
To use the system, follow these steps:
    1. Navigate to http://localhost:4200 in your web browser.
    2. Fill out the form with the basic details of your restaurant, including:
    • Restaurant name
    • Contact name
    • Pincode
    • Location
    • Website
    • Phone number
    • Average daily transactions
    3. Click the Submit button to submit the form.
    4. Form is successfully submitted.
    5. To view the details of your submission, click the View Submissions button. You will be taken to a page where you can view all of your previous submissions.
    
    
    
API Documentation
The system provides the following APIs:
POST /restaurants
This API is used to submit the form data. The request body should be in JSON format and contain the following fields:
    • name (string): The name of the restaurant.
    • contactName (string): The name of the contact person for the restaurant.
    • pincode (string): The pincode of the restaurant's location.
    • location (string): The location of the restaurant.
    • website (string): The website URL of the restaurant.
    • phone (string): The phone number of the restaurant.
    • avgDailyTransactions (number): The average number of daily transactions for the restaurant.
      
      
      
GET /restaurants
This API is used to get all of the submissions made by a restaurant. The API returns a JSON response with an array of objects, where each object represents a submission and contains the following fields:
    • id (string): The ID of the submission.
    • name (string): The name of the restaurant.
    • contactName (string): The name of the contact person for the restaurant.
    • pincode (string): The pincode of the restaurant's location.
    • location (string): The location of the restaurant.
    • website (string): The website URL of the restaurant.
    • phone (string): The phone number of the restaurant.
    • avgDailyTransactions (number): The average number of daily transactions for the restaurant.

