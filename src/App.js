import React from "react"
import Main from "./components/main"
import Hero from "./components/hero"
import Banner from "./components/banner"
import Section from "./components/section"
import Transform from "./utils/transformer"
import mainData from "./data/main.json"
import heroData from "./data/hero.json"
import bannerData from "./data/banner.json"
import sectionData from "./data/section.json"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Main>
        {Transform(mainData)}
        <Hero>{Transform(heroData)}</Hero>
        <Banner>{Transform(bannerData)}</Banner>
        <Section>{Transform(sectionData)}</Section>
      </Main>
    </div>
  )
}

export default App
