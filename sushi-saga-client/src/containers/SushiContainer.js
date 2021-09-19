import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ state, eaten, moreSushi, data }) => {

  return (
    <Fragment>
      <div className="belt">
        {
          data.map((sushi, index) => {
            return <Sushi sushi={sushi} key={index} eaten={eaten} id={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} state={state} created_at={sushi.created_at} />
          })

        }
        <MoreButton moreSushi={moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer