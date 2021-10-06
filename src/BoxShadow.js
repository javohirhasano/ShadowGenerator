import React, { useState } from 'react'
import Container from './Container'
import styled, { css } from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import "react-simple-typewriter/dist/index"


const BoxShadow = () => {
    const [boxShadow, setBoxShadov] = useState({
        boxcolor: "black",
        inste: true,
        x: 0,
        y: 0,
        blurRadus: 0,
        spreadRadus: 0,
        opacity: 0.89,
        radus: 0,
    })


    let Box = styled.div`
               ${props => props.otherStyle && css`
             background-color: ${boxShadow.boxcolor};
             height: 440px;
            display: flex;
            justify-content: center;
            align-items: center;
`}
box-shadow:${boxShadow.inste ? `inste` : ``}
        ${`${boxShadow.x}px`} ${`${boxShadow.y}px`} ${`${boxShadow.blurRadus}px`}
        ${`${boxShadow.spreadRadus}px`} 
         rgba( 0,0,0,${boxShadow.opacity});
         `;
    const shadowVal = Box.componentStyle.rules;
    const ShadowMap = shadowVal.map((item) => {
        return item;
    })
    return (
        <Container >
            <h1 className="mb-5"
                style={{ paddingTop: '3rem', margin: 'auto 0' }}
            >I am a<span
                style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}
            >
                    <Typewriter loop cursor cursorStyle="_" typeSpeed={70}
                        delaySpeed={1000}
                        deleteSpeed={50}
                        words={["Web Deweloper", "Logist", "Student"]}
                    ></Typewriter>
                </span> </h1>
            <div className="col-md-6">
                <Box className="col-9 m-auto" otherStyle>
                    <p className="bg-white border p-1">
                        {ShadowMap}
                    </p>
                </Box>
            </div>
            <div className="col-md-6">
                <div className="row g-3">
                    <div className="col-12">
                        <label for="boxcolor" className="form-label"> Box Color
                        </label>
                        <input type="color"
                            className="form-control form-control-color"
                            id="boxcolor" value={boxShadow.boxcolor}
                            onChange={(event) => setBoxShadov({ ...boxShadow, boxcolor: event.target.value })}
                        />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input"
                            type="checkbox"
                            id="inste-outset"
                            onChange={(event) => setBoxShadov({ ...boxShadow, inste: !boxShadow.inste })}
                            checked={boxShadow.inste ? true : false} />
                        <label class="form-check-label" for="inste-outset">
                            Check</label>
                    </div>
                    <div className="col-12">
                        <label for="HorizontalLength"
                            className="form-label">Horizontal length</label>
                        <input type="range" className="form-range"
                            id="HorizontalLength"
                            min="-200"
                            max="200"
                            value={boxShadow.x}
                            onChange={(event) => setBoxShadov({ ...boxShadow, x: event.target.value })}                        ></input>
                    </div>
                    <div className="col-12">
                        <label for="HorizontalLength"
                            className="form-label">Vertical length</label>
                        <input
                            type="range"
                            className="form-range"
                            id="HorizontalLength"
                            min="-200"
                            max="200"
                            value={boxShadow.y}
                            onChange={(event) => setBoxShadov({ ...boxShadow, y: event.target.value })}>

                        </input>
                    </div>
                    <div className="col-12">
                        <label for="BlurRadus"
                            className="form-label">Box-Shadow Radus</label>
                        <input
                            type="range"
                            className="form-range"
                            id="BlurRadus"
                            min="0"
                            max="300"
                            value={boxShadow.blurRadus}
                            onChange={(event) => setBoxShadov({ ...boxShadow, blurRadus: event.target.value })}>

                        </input>
                    </div>
                    <div className="col-12">
                        <label for="BlurRadus"
                            className="form-label">Opacity</label>
                        <input
                            type="range"
                            className="form-range"
                            id="BlurRadus"
                            min="0"
                            max="1"
                            step="0.1"
                            value={boxShadow.opacity}
                            onChange={(event) => setBoxShadov({ ...boxShadow, opacity: event.target.value })}>

                        </input>
                    </div>



                </div>
            </div>




        </Container>
    )
}

export default BoxShadow
