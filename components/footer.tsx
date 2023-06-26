import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="footer-container max-w-8xl mt-16">
      <div className="footer-section">
        <img src="/logo.svg" alt="Logo" width="200px" />
        <div className="social-media-links">
          <a href="https://example.com/social-link1" target="_blank" rel="noopener noreferrer">
            <img src="/discord.png" alt="Social Link 1" width="25px" />
          </a>
          <a href="https://example.com/social-link2" target="_blank" rel="noopener noreferrer">
            <img src="/li.png" alt="Social Link 2" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/fb.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/tt.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/yt.png" alt="Social Link 3" width="25px" />
          </a>
          <a href="https://example.com/social-link3" target="_blank" rel="noopener noreferrer">
            <img src="/notion.png" alt="Social Link 3" width="25px" />
          </a>
        </div>
        <p className="contact-text align-right text-gray-500">kontakt@deeptechlabs.pl</p>
      </div>
      <div className="footer-section align-right text-gray-500">
       
      </div>
      <div className="footer-section align-right text-gray-300">
         
      </div>
      <div className="footer-section align-right text-gray-300">
        <ul>
        <li><Link href="/rodo">Polityka prywatności</Link></li>

        <li><Link href="/kariera">Kariera</Link></li>
        </ul>
      </div>

      <style jsx>{`
        .footer-container {
          display: flex;
          width: 96%;
          padding: 2%;
        }

        .footer-section {
          width: 25%;
          padding: 5px;
        }

        .align-right {
          text-align: right;
        }

        .social-media-links {
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
        }

        .social-media-links a {
          margin-right: 10px;
        }

        .social-media-links img {
          width: 25px;
        }

        .contact-text {
          margin-top: 30px;
          text-align: left;
          color: gray-500;
        }
      `}</style>
    </div>
  );
};

export default Footer;