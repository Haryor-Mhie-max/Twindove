import Motion from "../components/Motion";
import { ReactElement } from "react";
import SectionContainer from "../components/SectionContainer";
import { useInView } from "react-intersection-observer";

export default function Contact(): ReactElement {
  const [ref, inView] = useInView();
  return (
    <SectionContainer id="contact" sectionTitle="Contact Us" ref={ref}>
      <div className="info">
        Providing the best possible care to our customers without breaking a
        sweat
      </div>

      <div className="container">
        <div className="row">
          <Motion className="item" inView={inView} from="bottom">
            <div className="icon">
              <svg
                width="24"
                viewBox="0 0 384 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0C298.039 0 384 85.961 384 192C384 269.413 357.03 291.031 211.732 501.67C202.197 515.444 181.802 515.443 172.268 501.67ZM192 272C236.183 272 272 236.183 272 192C272 147.817 236.183 112 192 112C147.817 112 112 147.817 112 192C112 236.183 147.817 272 192 272Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Office Address</h3>
            <div className="info">
              No. D2 Yahaya Aminu Shopping Complex,Kofan Doka, Zaria, Kaduna
              state.
            </div>
          </Motion>

          <Motion className="item" inView={inView} from="bottom">
            <div className="icon">
            <svg 
              width="24" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
              <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              />
            </svg>
            </div>
            <h3>Get in Touch</h3>
            <div className="info highlight">
              <a href="mailto:info@twindove.org">info@twindove.org</a>{" "}
              <a href="mailto:twindove2018@gmail.com">twindove2018@gmail.com</a>{" "}
              <a href="tel:+2348149571999">+2348149571999</a>
            </div>
          </Motion>

          <Motion className="item" inView={inView} from="bottom">
            <div className="icon">
            <svg 
              width="24"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
                <path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                />
                </svg>
            </div>
            <h3>Working Hours</h3>
            <div className="info">
              Workdays: Monday - Sunday: Time: 8:00am to 6:00pm
            </div>
          </Motion>
        </div>
      </div>

      <style jsx>{`
        .info {
          font-size: 20px;
          font-weight: 500;
          text-align: center;
        }

        .row {
          display: flex;
          flex-direction: column;
          grid-gap: 32px;
          padding: 0 15px;
        }

        .row :global(.item) {
          background-color: #fff;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.05);
          padding: 2rem;
          border-radius: 0.5rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container {
          padding: 3rem 0;
        }

        .icon {
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        h3 {
          font-size: 1rem;
          font-size: 16px;
          padding: 1rem 0;
          color: #222;
        }

        .info {
          font-size: 14px;
          line-height: 25px;
        }

        a {
          color: rgba(61, 96, 244, 0.3);
          text-decoration: none;
        }

        @media only screen and (min-width: 990px) {
          .row {
            flex-direction: row;
          }

          .col {
            width: 100%;
          }

          .row :global(.item) {
            width: 100%;
          }
        }
      `}</style>
    </SectionContainer>
  );
}
