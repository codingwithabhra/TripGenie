# TripGenie (Ai-powered travel planner)
TripGenie is a MERN stack-based travel planning application that uses AI to help users create personalized travel itineraries based on their preferences, budget, and destination. It simplifies trip planning by providing smart recommendations, organizing travel details, and delivering a seamless travel planning experience.

---

## Demo Link
[Demo Link](https://travel-genie-phi.vercel.app/)

---

## Log In

> **Guest**
> Username: 'Megha Bhattacharya',
> Email: 'megha.bhattacharya77@gmail.com',
> Password: 'Megha@963'

---

## Quick Start
```
git clone https://github.com/codingwithabhra/LeadFlow.git
cd <your-repo>
npm install
npm run dev # or `npm start` / `yarn dev`
```

---

## Technologies
- React Js
- React Router
- OpenAi SDK
- Oauth 2.0
- Node Js
- Express Js
- Mongodb
- Bootstrap

---

## Demo Video
Watch a walkthrough (5-7 minutes) of all the major features of this app : [Watch Video](https://drive.google.com/drive/folders/1ewpRziGEsAGuZdV1lIDCAf_68wjzzEfh?usp=sharing)

---

## Features
**Log In**
- Displays a log-in form for user to sign-in.
- A google sign-in button.
- For new user, "create an account" option.

**Sign Up**
- Displays a form for user to sign up.
- Form includes full name, email, password.
  
**Home**
- Displays a example trip planning of "Tokyo, Japan".

**Plan My Trip**
- Choose your destination and duration.
- Click on 'Generate Trip' button.
- Ai generated travel planner will be displayed.

**My Profile**
- User personal details like email, name, sign-in method are being displayed.
- Clicking on "Log out" button will take user out of the app.

---

## Api Reference

### **GET /api/travel-plan**<br>
Get the complete travel plan<br>
Sample response:<br>
```
[{city, country, Best Time to Visit, Ideal Duration, Must-Visit Places, Trip Itinerary, Estimated Trip Cost, Local Tips},...]
```

### **POST /auth/signup**<br>
To send new user info to database<br>
Sample response:<br>
```
[{_id, name, email, password},...]
```

### **POST /auth/login**<br>
To send user log in info to database<br>
Sample response:<br>
```
[{_id, email, password},...]
```

### **GET /auth/profile**<br>
To get user info from database<br>
Sample response:<br>
```
[{_id, name, email, password},...]
```

---

## Contacts
For bugs or features request please reach out to patra.abhra97@gmail.com
