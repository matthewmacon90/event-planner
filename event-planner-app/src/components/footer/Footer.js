import './FooterStyles.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='footer-leftside'>Left Side</div>
            <div className='footer-middle'>
                <p>© 2021 - All rights reserved</p>
            </div>
            <div className='footer-rightside'>
                <div className='footer-social'>
                    <a>FACEBOOK</a>
                    <a>INSTAGRAM</a>
                    <a>TWITTER</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
