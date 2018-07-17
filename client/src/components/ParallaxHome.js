import React  from 'react';
import {Parallax} from 'react-materialize'
import styled from 'styled-components'

const Section = styled.div`
    background: #DCA897;
`

const HomeParallax = () => (
<div>
  <Parallax imageSrc="http://labor411.org/images/sunset-plane.jpg"/>
  <Section className="section">
    <div className="row container">
      <h2 className="header">Parallax</h2>
      <p className="grey-text text-darken-3 lighten-3">
      Some Kinda Sentences about the vagabond app, what we're about, whatever
      </p>
    </div>
  </Section>
  <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
</div>
)

export default HomeParallax