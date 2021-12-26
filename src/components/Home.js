import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import ContactOptions from './contactOptions/ContactOptions'

export default function Home() {
    return (
        <div id="contents">
            <Header />
            <Content />
            <ContactOptions />
        </div>
    );
}
