import React from 'react'
import './Section.css'
import Box from '../box/Box'

class Section1 extends React.Component{ 
    render() {
        return(    
            <section>
                <div id='Info' >
                    <Box text="some task" />
                </div>
            </section>
        )
    }
}

export default Section1;