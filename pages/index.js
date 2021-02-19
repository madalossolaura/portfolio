import React from 'react';
import Cover from '../src/components/commons/Cover';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Projects from '../src/components/commons/Projects';

export default function Home() {
  return (
    <div>
      <Cover />
      <Menu />
      <Projects />
      <Footer />
    </div>
  );
}
