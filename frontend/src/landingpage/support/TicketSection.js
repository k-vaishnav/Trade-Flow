const TicketSection = ({ key, title, icon, links }) => {
  return (
    <div className="col-4 p-4 mt-2 mb-3">
      <h6 className="fs-5 mb-3">
        <i className={`${icon} me-3`}></i>
        {title}
      </h6>

      {links.map((item, index) => (
        <a
          key={index}
          href="#"
          style={{
            textDecoration: "none",
            lineHeight: "2.5",
            fontSize: "17px",
          }}
        >
          {item}
          <br />
        </a>
      ))}
    </div>
  );
};

export default TicketSection;
