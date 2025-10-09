# II3140 - Pengembangan Aplikasi Web dan Mobile

## Data Literacy & Artificial Inteligence Virtual Lab - Laid-Back Data

![Laid-Back-Data](/docs/landingpage.png)

## About

Laid-Back Data is an inovation of virtualization lab of WI2002 - Data Literation & Articial Inteligence subjects. Laid-Back Data were inspired from one of the interactive learning of Data Science named Data Camp and a TV animation named Laid-Back Camp. Laid-Back Data brought to you into the introduction of Data Literacy and the world of A.I. while you learn it without any anxiety<br/>

## Tools:

Tools that been used for this project:</br>

- NextJS: v15.5.4
- React: v19.1.0
- TailwindCSS: v3.4.18

## Deployment:

- Frontend: Vercel
- Backend: Supabase

## Prerequirement

Before you run it in your local machine, make sure you have these installed:<br/>

- NodeJS : v14.x.x or higher
- Free Supabase Account (Create on https://supabase.com/)</br>

## How to Use it

- Clone this Repository into your local machine

```
git clone https://github.com/rinmdfa25/II3140-Data-Literacy-AI-virtuallabproject-Laid-Back-Data-18223140.git
cd virtual-lab-project
```

- Install the dependencies

```
npm install
```

- Set up the Supabase

Go to Supabase.io(https://supabase.com/), create a new project, and wait for the database to be set up.<br/>

Once your project is ready, go to the SQL Editor in the dashboard.<br/>

Run the SQL queries found in the schema.sql file in this repository to create the necessary tables (scores, progress, etc.).<br/>

- Configure your environment variable

In the root of the project, find the .env.example file. This is your template for the required keys.<br/>

Create a new file in the same location and name it .env.local.<br/>

Go to your new Supabase project's Settings > API.<br/>

Copy your Project URL, anon public key, and service_role secret key.<br/>

Paste these values into your new .env.local file:<br/>

```
NEXT_PUBLIC_SUPABASE_URL=(YOUR_SUPABASE_URL)
NEXT_PUBLIC_SUPABASE_ANON_KEY=(YOUR_SUPABASE_ANON_KEY)
SUPABASE_SERVICE_ROLE_KEY=(YOUR_SUPABASE_SERVICE_ROLE_KEY)
```

- Run in your local machine

```
npm run dev
```

- Open with Live Server or with your browser

## Features

- Interactive Learning System
  ![Laid-Back Data - learning](/docs/learningpage.png)
  Users can watch videos and can access documentation. The subject of each course represents the introduction of Data Literacy and Artificial Inteligence within the tool that they need<br/>

- Games</br>
  Not only learning, users also play games to sharpen thair learning skills and can be use in the real world

  ![Laid-Back Data - Quiz](/docs/quizpage.png)
  After users learn of the basic fundamental of Data Literacy and Artificial Inteligence. Users have challenge of answering all the quiz questions to help remembering of what they're learned</br>

  ![Laid-Back Data - Matching Words](/docs/matchingpage.png)
  Not only Quiz, users also have challenge of matching the words that being shown on and match the right word with the image</br>

## Disclaimer!!!

All Assets were not from my work. It references from Freepik (https://www.freepik.com/) and Pixiv (https://www.pixiv.net/en/). All Assets were used in the purpose of education use. Not for commercial use.
