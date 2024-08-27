import React from 'react'
import PagesHero from '../components/PagesHero/PagesHero'
import img from "./../assets/images/page-heading-bg.jpg"
import SectionContactForm from '../components/SectionContactForm/SectionContactForm'


const ContactUs = () => {
  return (
    <div>
      <PagesHero title="CONTACT US" sub="HOME / CONTACT US" img={img} />
      <SectionContactForm contactPage />
    </div>
  )
}

export default ContactUs