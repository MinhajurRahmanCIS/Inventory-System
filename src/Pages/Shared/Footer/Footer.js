import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaFacebookMessenger, FaTwitter, FaTwitch } from 'react-icons/fa';
import { SiYoutubegaming, SiPcgamingwiki} from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on"><FaFacebookF /></div>
                <div className="swap-off"><FaFacebookMessenger /></div>
            </label>
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on"><SiYoutubegaming /></div>
                <div className="swap-off"><SiPcgamingwiki /></div>
            </label>
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on"><FaTwitter /></div>
                <div className="swap-off"><FaTwitch /></div>
            </label>
            </div>
                <p>Copyright 2022
                    <br />
                    <small> Thank you for Visit</small>
                </p>
        </footer>
    );
};

export default Footer;