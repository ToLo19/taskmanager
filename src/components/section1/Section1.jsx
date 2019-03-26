import React from 'react'
import './Section.css'
import Box from '../box/Box'

class Section1 extends React.Component{ 
    render() {
        return(    
            <section>
                <div id='Info' >
                    <Box text='Go shopping' />
                    <Box text='Bring the milk' />
                    <Box text='To cook a pie' />
                </div>
            </section>
        )
    }
}

export default Section1;