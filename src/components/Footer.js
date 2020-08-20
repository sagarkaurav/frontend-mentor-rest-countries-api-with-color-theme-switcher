import React from 'react';

const Footer = () => {
    return (
        <div className="px-8 py-4 text-xs text-center shadow-sm bg-primary">

            Challenge by <a className="text-blue-600" href="https://www.frontendmentor.io?ref=challenge" rel="noopener noreferrer" target="_blank">Frontend Mentor</a>.
      Coded by <a className="text-blue-600" href="https://www.frontendmentor.io/profile/sagarkaurav">Sagar Kaurav</a>.
            <a className="text-blue-600" href="https://github.com/sagarkaurav">Github</a><br />
            Icons by <a className="text-blue-600" href="https://icons.getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap Icons</a><br />
            API by <a className="text-blue-600" href="https://restcountries.eu" rel="noopener noreferrer" target="_blank">https://restcountries.eu</a><br />
        </div>
    );
}

export default Footer;