import React from 'react'
import Helmet from 'react-helmet'
export const Metadata = ({title}) => {
    return (
      <Helmet>
          <title>
              {title}
          </title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />

      </Helmet>
    )
}
