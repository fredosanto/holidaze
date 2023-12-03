# Holidaze - Project Exam

Check out the [Live Demo](https://fredo-holidaze.netlify.app/) here.

<img width="500" alt="holidaze" src="https://github.com/fredosanto/holidaze/assets/93183340/e18e8b39-db4f-43f0-b13c-43e78e7e4249">

<img width="500" alt="holidaze_venue" src="https://github.com/fredosanto/holidaze/assets/93183340/b4bc867c-179b-4d38-85cc-b39e6d21bd23">



## Description

This project is my project exam at Noroff where I was tasked to build a booking site called Holidaze with React.

Brief:
A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

## Requirements

> All API functionality is managed by an existing application. This project only covers the front-end application for the API.

### User Stories

A user may view a list of Venues
A user may search for a specific Venue
A user may view a specific Venue page by id
A user may view a calendar with available dates for a Venue
A user with a stud.noroff.no email may register as a customer
A registered customer may create a booking at a Venue
A registered customer may view their upcoming bookings
A user with a stud.noroff.no email may register as a Venue manager
A registered Venue manager may create a Venue
A registered Venue manager may update a Venue they manage
A registered Venue manager may delete a Venue they manage
A registered Venue manager may view bookings for a Venue they manage
A registered user may login
A registered user may update their avatar
A registered user may logout

### Link to the site: [Live Demo](https://fredo-holidaze.netlify.app/).

## Pages
- Home page
- Venues Page (list of all venues)
- Single Venue page
- Booking page
- Login and Register page
- Profile page
- Admin panel page
- Add venue page
- Update venue page
- Update booking page
- Update avatar page 

### User, Admin, Not registered user
The page displays different component and restricts the different user profile.

### Navbar
A responsive navbar that turns to a hamburger menu for mobile view. It will only show the Profile link only if a user i logged in. Login button will also show Logout if user is logged in. 

### Forms
All forms handle errors by showing a popup to the user if it succeeds or type of error. All forms are built with [react-hook-form](https://react-hook-form.com/) and [Yup](https://github.com/jquense/yup) for validation with schema.

### Home page
Index page for campaigns and news boxes that navigates to different parts of the page.

### Venues page
Lists all venues and includes pagination to show only 10 venues at the time, a show more button is provided at the bottom and shows another 10 venues. At the top is a typeahead searchbar that was a requirement from the brief.

### Single venue page
Shows a single venue and all information, media files and owner card. The button to book venue will wither navigate to a Booking page for logged in users, or it will navigate to Login page if a user is logged out or not registered. 

### Booking page
Uses a datepicker from [React Datepicker](https://reactdatepicker.com/). A user must choose dates by using a date range. Dates that is already booked by others are excluded and marked as not available. The user can only book for certain amount of guests which is shown in the Booking form.

### Update booking page
Similar to Booking page, but a user can update their booking. The page shows a current reservation field to show information on the reservation made last time.

### Login and Register page
A user can login if registered with a @stud.noroff.no mail. On the registration page a user can choose between regular user profile or admin profile with a checkbox.

### Profile page
The profile page show exact same for a regular user and admin except that the admin have a additional admin button available on the profile card. The profile page also shows a list of upcoming bookings made by the user / admin. From here a user/admin can manage and update a upcoming booking. All logged in users can also navigate to Update avatar.

### Update avatar
All users can change avatar/profile image with a image URL.

### Admin panel page
All admins have access to a admin panel. On this page a list of all owned venues are shown in a list and the admin can delete, update or add venue.

### Update/manage venue page
Shows current booking by others on the venue. From here you can navigate to a update venue form.

### Add venue page
A admin can add a venue. Some fields are required.


## Built with

- Vite
- HTML
- CSS
- JavaScript
- React
- [Tailwind](https://tailwindcss.com/)
- [react-router](https://reactrouter.com/en/6.20.0)
- [react-hook-form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Datepicker](https://reactdatepicker.com/)
- Netlify

## Reference

- Images in public folder from Unsplash.
- Icons from [ionic](https://ionic.io/ionicons).

## Getting started

### Installing

1. Clone the repo:

```
git clone https://github.com/fredosanto/holidaze.git

npm install

npm run dev
```
