import React from 'react'
import PagesHero from '../components/PagesHero/PagesHero'
import img from "./../assets/images/page-heading-bg.jpg"
import SectionDeal from '../components/SectionDeal/SectionDeal'
import { tabs } from '../data/deal'
import SectionSingleProperty from '../components/SectionSingleProperty/SectionSingleProperty'

const PropertiesDetailes = () => {
  return (
    <div>
      <PagesHero img={img} title="SINGLE PROPERTY" sub="HOME / SINGLE PROPERTY" />
      <SectionSingleProperty />
      <SectionDeal
        tabs={tabs}
        title="Find Your Best Deal Right Now"
        subtitle="BEST DEAL"
      />
    </div>
  )
}

export default PropertiesDetailes