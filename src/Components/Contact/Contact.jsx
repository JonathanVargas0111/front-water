import React from 'react'
import './Contact.css'

function Contact() {

    const handleChange = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className='section-contact'>
            <h2 className='section-contact__title'>Contact</h2>
            <form onSubmit={handleSubmit} className="section-contact__form">
                <input type="text"
                placeholder='Name' 
                name="name" // <<< email como la propiedad del state
                onChange={handleChange} />
                <input type="text"  
                placeholder='Email'
                onChange={handleChange} />

                <textarea
                    placeholder='Message'
                ></textarea>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}

export { Contact }


