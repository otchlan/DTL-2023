import React from "react";
import Link from "next/link";

const CardCSI = () => {
  return (
    <div className="card-container">
      <div className="card">
        <Link href="/d_hack">
          <button className="card-button">
            <img src="/hak.png" alt="Hak Image" className="button-image" />
          </button>
        </Link>
      </div>
      <div className="card">
        <Link href="/d_konf">
          <button className="card-button">LublinAI: Konferencja Rozwoju Sztucznej Inteligencji</button>
        </Link>
      </div>
      <div className="card">
        <Link href="/d_bc">
          <button className="card-button">
            <img src="/ls_logo_trans.png" alt="Hak Image" className="button-image" />
          </button>
        </Link>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          width: 96%;
          margin: 0 auto;
        }
        .card {
          flex: 1;
          height: 200px;
          border-radius: 8px;
          border: 5px solid #08fc9c;
          background-color: #212121;
          margin-right: 2%;
          margin-left: 2%;
          width: 30%;
        }
        .card-button {
          width: 100%;
          height: 100%;
          border: none;
          background-color: transparent;
          color: #08fc9c;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .button-image {
          width: 180px;
          height: 180px;
          transition: transform 0.5s;
        }
        .button-image:hover {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
};

export default CardCSI;
