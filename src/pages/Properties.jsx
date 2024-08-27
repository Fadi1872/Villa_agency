import React from 'react'
import PagesHero from '../components/PagesHero/PagesHero'
import img from "./../assets/images/page-heading-bg.jpg"
import SectionFilterProperties from '../components/SectionFilterProperties/SectionFilterProperties'

const Properties = () => {
  return (
    <div>
      <PagesHero title="PROPERTIES" sub="HOME / PROPERTIES" img={img} />
      <SectionFilterProperties />
    </div>
  )
}

export default Properties