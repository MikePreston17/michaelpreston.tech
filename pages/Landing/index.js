import React from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    span: {
        fontSize: "65px",
        "letter-spacing": "2px",
        "font-family": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
    }
})

const Landing = (props) => {
  return (
    <>
      <section className={'hero container'}>
        <div id="logo">MICHAEL PRESTON</div>
        <h1>
          Full Stack Design <br></br> <span> PORTFOLIO</span>
        </h1>
        <div className="button">
          <Link className="btn1" href="/portfolio">Portfolio</Link>
          {/* <Link className="btn1" to="/projects">
            See Portfolio!
          </Link> */}
          {/* <a
            href="https://www.linkedin.com/in/michael-n-preston/"
            className="btn2"
          >
            Connect on LI!
          </a> */}
        </div>
      </section>
      <style jsx>
        {`
          #logo {
            margin-top: -180px;
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            font-size: 120%;
            font-family: "Monda";
          }

    const { span } = props.classes;

    return (
        <>
            <section className={"hero container"}>
                <div id="logo">MICHAEL PRESTON</div>
                <h1>Full Stack Design <br></br> <span className={span}> PORTFOLIO</span></h1>
                <div className="button">
                    {/* <Link className="btn1" to="/projects">See Portfolio!</Link> */}
                    <a href="https://www.linkedin.com/in/michael-n-preston/" className="btn2">Connect on LI!</a>
                </div>
            </section>
        </>)
}

export default Landing
