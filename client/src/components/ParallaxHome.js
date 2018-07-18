import React  from 'react';
import {Parallax} from 'react-materialize'
import {Card} from 'react-materialize'
import {CardTitle} from 'react-materialize'
import {Col} from 'react-materialize'
import styled from 'styled-components'

const Section = styled.div`
    background: #efe7e1;
`

const HomeParallax = () => (
<div>
  <Parallax imageSrc="http://forexbook.info/wp-content/uploads/2015/10/Why-you-must-visit-London-right-now.jpg"/>
  <Section className="section">
    <div className="row container">
      <center>
        <h2 className="header">Welcome to Vagabond</h2>
        <p className="grey-text text-darken-3 lighten-3">
        Candy cake chocolate gingerbread chocolate bar cheesecake dessert. Chocolate cake muffin marshmallow gummi bears donut icing halvah jujubes. Candy pudding chocolate candy canes jelly-o lollipop lollipop candy. Croissant soufflé dessert caramels brownie. Tootsie roll chupa chups croissant. Topping tiramisu chocolate bar jelly. Tootsie roll lemon drops tart tiramisu chocolate cake fruitcake chupa chups. Gingerbread dragée oat cake halvah topping gingerbread liquorice. Bonbon lemon drops sugar plum biscuit sesame snaps lemon drops jujubes sesame snaps. Toffee macaroon sugar plum gummi bears marshmallow candy canes jujubes chocolate. Halvah jelly-o sesame snaps wafer powder biscuit candy cupcake muffin. Macaroon macaroon bear claw carrot cake tootsie roll.
        Pudding cotton candy soufflé gummi bears tiramisu sugar plum muffin. Biscuit jelly-o chocolate bar bonbon. Jujubes sweet dragée icing wafer liquorice toffee chupa chups lollipop. Chocolate donut pastry danish macaroon. Sweet muffin caramels gummies jelly beans. Ice cream danish cookie tart lemon drops candy canes marzipan marshmallow cookie. Cheesecake toffee liquorice caramels sugar plum bear claw soufflé. Cupcake muffin halvah caramels liquorice dessert bonbon cheesecake. Tart caramels marshmallow. Powder gummi bears halvah croissant caramels cake icing. Sweet lemon drops pie oat cake cookie chocolate bar icing. Apple pie chocolate bar chupa chups chocolate bar gummi bears sweet apple pie. Muffin dragée cookie pie lemon drops.
        </p>
      </center>
    </div>
  </Section>
<Parallax imageSrc="https://www.atlantaphotos.com/media/wysiwyg/Slideshow-AquaticCtr.jpg"/>
  <Section className="section">
    <div className="container">
    <Card 
      header={<CardTitle image='http://blog.biletbayi.com/wp-content/uploads/2017/10/Atlantada-gezilecek-yerler.jpg'>ATLANTA</CardTitle>}
      actions={[<a href='#'>CLICK HERE</a>]}>
      Capital of the south......
    </Card>
    <Card
      header={<CardTitle image='http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/styles/sft_1170x375/public/landmark-images/golden-gate_web.jpg?itok=pShnI_Sv&timestamp=1499715987'>SAN FRANCISCO</CardTitle>}
      actions={[<a href='#'>CLICK HERE</a>]}>
      The "Golden State"......
    </Card>
    <Card
      header={<CardTitle image='https://theflightfinder.com/wp-content/uploads/2017/12/london.jpg'>LONDON</CardTitle>}
      actions={[<a href='#'>CLICK HERE</a>]}>
      Home of "Big Ben"......
    </Card>
    </div>
  </Section>

</div>
)

export default HomeParallax