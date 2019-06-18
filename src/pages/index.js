import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import EmotionCards from "../components/emotionCards";

const IndexPage = () => (
  <Layout>
    <div class="intro">
      <h1>How are you feeling?</h1>
      <p>Click or tap an emotion to learn more about it.</p>
    </div>
    <div className="AllCards">
      <EmotionCards
        emoji="🙂"
        buttonOne="happy"
        buttonTwo="contented"
        buttonThree="fine" />
    </div>
    <div className="AllCards">
      <EmotionCards
        emoji="😐"
        buttonOne="stressed"
        buttonTwo="anxious"
        buttonThree="bored" />
    </div>
    <div className="AllCards">
      <EmotionCards
        emoji="😢"
        buttonOne="bummed out"
        buttonTwo="sad"
        buttonThree="depressed" />
    </div>
    <div className="AllCards">
      <EmotionCards
        emoji="😡"
        buttonOne="annoyed"
        buttonTwo="angry"
        buttonThree="resentful" />
    </div>
    {/* <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
