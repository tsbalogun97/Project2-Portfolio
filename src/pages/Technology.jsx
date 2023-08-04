import React from 'react'
import awsimg from '../Pictures/aws.png'
import htmlimg from '../Pictures/html.png'
import cssimg from '../Pictures/css.png'
import javaimg from '../Pictures/javascript.png'
import reactimg from '../Pictures/react.png'
import nodeimg from '../Pictures/node.png'
import expressimg from '../Pictures/express.png'
import mongoimg from '../Pictures/mongodb.png'
import sqlimg from '../Pictures/sql.png'

function Technology() {
  return (
    <div className='techwrapper'>
      <img src= {htmlimg} alt="" className="tkimg" />
      <img src= {cssimg} alt="" className="tkimg" />
      <img src= {javaimg} alt="" className="tkimg" />
      <img src= {reactimg} alt="" className="tkimg" />
      <img src= {expressimg} alt="" className="tkimg" />
      <img src= {mongoimg} alt="" className="tkimg" />
      <img src= {nodeimg} alt="" className="tkimg" />
      <img src= {awsimg} alt="" className="tkimg" />
      <img src= {sqlimg} alt="" className="tkimg" />
    </div>
  )
}

export default Technology