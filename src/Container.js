import React from 'react'

const Container = (props) => {
    return (
        <section className="py-5 container">
            <div className="py-5 row justify-content-center align-items-center">
                {props.children}
            </div>
        </section>
    )
}

export default Container
