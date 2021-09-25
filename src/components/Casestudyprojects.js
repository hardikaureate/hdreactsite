import React from 'react'
import { Link } from 'react-router-dom'

const CasestudyProjects = ({ projectData }) => {
    { console.log('00000', projectData) }
    return (
        <>
            <section id="two">
                <div className="inner">

                    <div className="box alt">
                        <div className="row gtr-50 gtr-uniform animate__animated animate__zoomIn">
                            {projectData && projectData.map((curElem) => {
                                const { id, name, category, image, projectlink } = curElem;
                                return (
                                    
                                        <div className="col-4" key={id}>
                                            <span className="image fit projectimg">
                                            <a href={projectlink}><img src={image} alt="images" /></a>
                                            </span>
                                        </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CasestudyProjects
