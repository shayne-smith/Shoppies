import React from 'react'
import { connect } from 'react-redux'
import { CloseOutlined } from '@ant-design/icons'
import { removeBanner } from '../store/actions'

const Banner = ({ removeBanner }) => {
    return (
        <div id="banner" >
            <p id="bannerText" >You have selected 5 movie nominations!!!</p>
            <CloseOutlined id="bannerClose" onClick={() => removeBanner()} />
        </div>
    )
}

export default connect(null, { removeBanner })(Banner)