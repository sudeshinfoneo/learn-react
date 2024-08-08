import { Link } from "react-router-dom";
import Logo from '../../assets/imgs/logo.svg'

const Footer = (props) => {
    return (
        <>
            <footer class="page-footer">
                <div class="container">

                    <p class="border-top mb-0 mt-4 pt-3 small">&copy;
                        <script>document.write(new Date().getFullYear())</script>, JoeBlog Created By
                        <a href="https://www.devcrud.com" class="text-muted font-weight-bold" target="_blank">DevCrud.</a>  All rights reserved </p>
                </div>
            </footer>

        </>

    )
}

export default Footer;
