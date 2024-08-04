import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
    return (
      <div>
        <Breadcrumb title={"Liên hệ"}></Breadcrumb>
        <Contact></Contact>
      </div>
    );
};

export default ContactPage;