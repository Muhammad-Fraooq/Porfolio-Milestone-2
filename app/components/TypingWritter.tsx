'use client'
import { Typewriter } from 'react-simple-typewriter';
import React from 'react'

const TypingWriter = () => {
    return (
        <div>
            <h2>
                <Typewriter
                    words={[
                        'Website Developer',
                        'Frontend Developer',
                        'Website Designer',
                        'Responsive Website',
                        'UI & UX Designer',
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                /></h2>
        </div>
    )
}

export default TypingWriter