import React from "react";

const Footer = () => {
  // ---------- Social Links ----------
  const socialLinks = [
    { icon: "fab fa-instagram", url: "https://www.instagram.com/zerodhaonline/" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/zerodha.social" },
    { icon: "fab fa-x-twitter", url: "https://twitter.com/zerodhaonline" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/company/zerodha/" },
    { icon: "fab fa-youtube", url: "https://www.youtube.com/@zerodhaonline" },
    { icon: "fab fa-whatsapp", url: "https://wa.me/" },
  ];

  // ---------- Footer Columns ----------
  const footerColumns = [
    {
      title: "Company",
      links: [
        "About",
        "Products",
        "Pricing",
        "Referral programme",
        "Careers",
        "Zerodha.tech",
        "Press & Media",
        "Zerodha cares (CSR)",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact",
        "Support portal",
        "Z-Connect blog",
        "List of charges",
        "Downloads & resources",
      ],
    },
    {
      title: "Account",
      links: ["Open an account", "Fund transfer", "60 day challenge"],
    },
  ];

  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-4">
        <div className="row mt-4">
          {/* -------- Left Logo + Social -------- */}
          <div className="col">
            <img src="/media/images/logo.svg" alt="logo" style={{ width: "50%" }} />

            <p className="mt-3 text-muted" style={{ fontSize: "16px" }}>
              © 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-4 mt-3 fs-6 social-icons">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} className="text-muted" target="_blank" rel="noreferrer">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* ---------- Footer Columns (Dynamic) ---------- */}
          {footerColumns.map((col, index) => (
            <div className="col" key={index}>
              <p className="fw-bold">{col.title}</p>

              {col.links.map((link, i) => (
                <div key={i} className="mb-2">
                  <a
                    href="#"
                    className="text-muted"
                    style={{ textDecoration: "none", fontSize: "16px", color: "black" }}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-muted" style={{ fontSize: "12px" }}>
          <p className="mb-2">
            {" "}
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p className="mb-2">
            {" "}
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p className="mb-2">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="mb-2">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="text-center mb-3" style={{ fontSize: "13px" }}>
          {["NSE", "BSE", "MCX", "Terms & conditions", "Policies & procedures", "Privacy Policy", "Disclosure", "For investor's attention", "Investor charter"]
            .map((item, i) => (
              <a
                key={i}
                href="#"
                style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
                className="text-muted fw-medium"
              >
                {item}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
