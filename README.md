#  SpaceX Launch Missions Viewer  
**COMP 3133 - Lab Test 2**  
**Student ID:** 101462578  
**Name:** Abdulgafar T.

---

##  Project Overview

This is a standalone Angular 16+ application that fetches and displays a list of SpaceX launches using the SpaceX REST API. The app includes filtering by year, detailed views for each mission, and a responsive UI using Angular Material.

---

##  Features Implemented

| Feature                                                   | Status |
|-----------------------------------------------------------|--------|
| Display all SpaceX missions from API                      | ✅     |
| Create and use a reusable Angular service                 | ✅     |
| Filter missions by launch year using a dropdown           | ✅     |
| View detailed mission data using router and route params  | ✅     |
| Create interface for mission data structure               | ✅     |
| Use Angular Material for improved UI                      | ✅     |
| Standalone Angular Components and Routing                 | ✅     |
| Hosted and deployed to Vercel                             | ✅     |

---

##  Live Demo

[View the app on Vercel](https://101462578-lab-test2-comp3133-c9vsuu32d.vercel.app)

---

##  Technologies Used

- Angular 16+ (Standalone Components API)
- TypeScript
- Angular Router
- Angular Material (UI Components)
- RxJS
- SpaceX REST API  
  `https://api.spacexdata.com/v3/launches`
- Vercel (Deployment)

---

##  Project Structure

- `missionlist` – Displays all launches
- `missionfilter` – Filters missions by launch year
- `missiondetails` – Displays detailed view for a selected mission
- `spacex.service.ts` – Fetches data from the API
- `app.config.ts` – Configures routing and HTTP client
- `mission.model.ts` – Defines interface for SpaceX launch data

---

##  Interface: Mission Data Structure

To maintain type safety, the following interface is used throughout the app:

```ts
export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}
