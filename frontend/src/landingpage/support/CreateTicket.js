import TicketSection from "./TicketSection"
import sections from "../../data/ticketSection";
const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-2 mt-3 mb-3">
        <h1 className="fs-3">To create a ticket, select a relevant topic</h1>

        {sections.map((section, index) => (
          <TicketSection
            key={index}
            title={section.title}
            icon={section.icon}
            links={section.links}
          />
        ))}
      </div>
    </div>
  );
};
export default CreateTicket;