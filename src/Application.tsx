import React from 'react';
import ContainedButtons from './ContainedButtons'

const NameTag = () => {
  return (
    <main>
      <header>
        <h1>fancy orc</h1>
      </header>
      <section className="display-name">
        <ContainedButtons />
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag />;

export default Application;
