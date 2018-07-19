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
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      </p>
    </div>
  </Section>
  <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
</div>
)

export default HomeParallax