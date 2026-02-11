import React from 'react';
import MealsGrid from '../../components/meals/meal-grid';

export default function Meals() {
  return (
    <>
      <header className="header">
        <h1>
          Delicious meals, created{' '}
          <span className="highlight">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="cta">
          <a href="/meals/share">
            Share Your Favorite Recipe
          </a>
        </p>
      </header>
      <main className="main">
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}