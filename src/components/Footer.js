import styled from "./Footer.module.css"

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className={styled["footer-container"]}>
                <p>
                    React-Practice
                </p>
                <p>
                    jeongjw0520@naver.com
                </p>
                <p>
                    {year} &#169;
                </p>
            </div>
        </footer>
    )
}

export default Footer