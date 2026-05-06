# Cozy Kitchen Journal

A cute, cozy meals listing interface built with **React + Vite** using the **FreeAPI Meals endpoint**.

Live Demo: **https://cozy-kitchen-journal.vercel.app/**

## Overview

Cozy Kitchen Journal is a pastel recipe browsing experience inspired by scrapbook and notebook UI patterns. The app fetches public meal data and presents it in a clean card grid with a detailed recipe modal.

The design focuses on:
- Soft, cozy visual language
- Easy scanning of recipes
- Readable ingredient and measurement alignment
- Smooth modal interactions for full meal details

## Features

- Browse meals in a responsive grid layout
- **12 meal cards per page** (API pagination)
- Card content includes:
  - Meal image
  - Meal name
  - Area/Cuisine
  - Short instructions preview (truncated)
- Recipe details popup modal with backdrop animation
- Full recipe details include:
  - Full instructions
  - Ingredient + measurement pairs (aligned in parallel)
  - Category, tags, area
  - YouTube tutorial link (when available)
- Custom cozy UI theme:
  - Pastel card variants
  - Notebook/grid-inspired background
  - Styled custom scrollbar
- Loading and error states for API requests

## Tech Stack

- **React**
- **Vite**
- **CSS (custom, no UI library)**
- **FreeAPI Meals endpoint**

## API Used

Base endpoint:

```txt
https://api.freeapi.app/api/v1/public/meals
```

Example with pagination:

```txt
https://api.freeapi.app/api/v1/public/meals?page=1&limit=12
```

## Project Structure

```txt
src/
  components/
    Header.jsx
    MealCard.jsx
    MealGrid.jsx
    Pagination.jsx
    RecipeModal.jsx
  utils/
    mealUtils.js
  App.jsx
  App.css
  main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Meals-Listing-Interface
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Key UI Behavior

- Clicking **Open Recipe Card** on a meal card opens a modal.
- Clicking outside the modal (backdrop) or close button closes it.
- Body scroll is locked while modal is open.
- Pagination buttons move between API pages and keep 12 items per page.

## Utility Logic

`src/utils/mealUtils.js` contains helper functions:

- `truncateByWords()` for limiting instruction preview text
- `getIngredientPairs()` for extracting `strIngredientX` and `strMeasureX` fields into aligned pairs

## Responsiveness

- Grid auto-adjusts card count based on screen width
- Modal adapts from two-column desktop layout to stacked mobile layout
- Typography and media block sizes are tuned for smaller screens

## Deployment

This project is deployed on **Vercel**:

**https://cozy-kitchen-journal.vercel.app/**

## Future Improvements

- Add search by recipe name (`query` parameter)
- Add filtering by category/area
- Add skeleton loaders for smoother fetch transitions
- Add accessibility enhancements (focus trap, ESC to close modal)
