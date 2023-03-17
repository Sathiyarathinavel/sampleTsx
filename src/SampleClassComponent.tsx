import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class SampleClassComponent extends Component {
    static propTypes = {}
    constructor(props: any) {
        super(props)
        this.state = { color: "red" }

    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default SampleClassComponent