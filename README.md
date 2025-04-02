# 101462578-lab-test2-comp3133

This project is part of COMP 3133 Lab Test 2.

##  Project Overview

An Angular application that displays a list of SpaceX launches using the SpaceX Launches REST API.  
It includes:

- A `MissionList` component to display launch information
- Fields like `flight_number`, `mission_name`, `launch_year`, `details`, `rocket_name`, `rocket_type`
- Mission patch images and external links to articles, Wikipedia, and videos

##  Technologies Used

- Angular 16+
- TypeScript
- SpaceX REST API
- Vercel (for deployment)

##  Deployment

Live on Vercel (Production):  
[https://101462578-lab-test2-comp3133-c9vsuu32d.vercel.app](https://101462578-lab-test2-comp3133-c9vsuu32d.vercel.app)


  
  ### 3. Create MissionList


   101462578-lab-test2-comp3133

This part of Lab Test 2. It is a standalone Angular application that fetches and displays data from the SpaceX Launches REST API.

##  Technologies Used
- Angular 16+ (Standalone APIs)
- TypeScript
- SpaceX REST API
- Bootstrap (for styling)
- Vercel (for deployment)

---

##  Features
-  Displays a list of all SpaceX launches
-  Fetches data using an Angular service (`HttpClient`)
-  Shows mission name, launch year, flight number, rocket info, and links (article, wiki, video)
-  Includes responsive card design using Bootstrap
-  Deployed on Vercel

---

##  Live Demo

🔗 [View Live on Vercel](https://101462578-lab-test2-comp3133-c9vsuu32d.vercel.app)

---

##  API Used

**Endpoint:**  
`https://api.spacexdata.com/v3/launches`

---

#  SpaceX Missions Viewer - COMP 3133 Lab Test 2

A simple Angular standalone application to view and filter SpaceX launches using the SpaceX REST API.

###  Live Demo:
[Vercel Deployment](https://101462578-lab-test2-comp3133.vercel.app)

---

## Features
- View list of SpaceX launches
- Filter launches by year (via dropdown)
- View mission details including:
  - Flight Number
  - Mission Name
  - Launch Year
  - Rocket Name & Type
  - Patch Image
  - Links: Article | Wikipedia | Video

---

##  Technologies Used
- Angular 16+ (Standalone Components)
- Angular Routing
- Bootstrap (for styling)
- SpaceX Launches API
- Hosted on Vercel

---

#  SpaceX Launch Missions - Angular App (Standalone)

This is a standalone Angular 16+ project built for **COMP 3133 Lab Test 2**. The application fetches and displays information about all SpaceX missions using the SpaceX REST API.

##  Project Structure

- `missionlist` - Lists all missions from the API
- `missionfilter` - Filters missions by launch year
- `missiondetails` - Displays detailed info about a selected mission
- `spacex.service.ts` - Centralized HTTP service for API communication
- `app.config.ts` - Configures routing and HTTP client for standalone app

---

##  Features Implemented

| Feature                                                   | Status |
|-----------------------------------------------------------|--------|
| Display all SpaceX missions from API                      | ✅     |
| Create and use a reusable service                         | ✅     |
| Filter missions by year using a dropdown                  | ✅     |
| View detailed mission data using router and route params  | ✅     |
| Used standalone components and Angular routing            | ✅     |

---

##  Technologies Used

- Angular 16+ (Standalone Components)
- TypeScript
- Angular Router
- RxJS
- SpaceX REST API: `https://api.spacexdata.com/v3/launches`

---







##  Developer Info

**Student ID:** 101462578  
**Name:** Abdulgafar T.  
**Course:** COMP 3133

