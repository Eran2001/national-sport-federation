import React from "react";

const events = [
  {
    id: 1,
    name: "Inter-Club Athletics Meet",
    date: "2025-09-15",
    location: "Colombo",
  },
  {
    id: 2,
    name: "Annual Sports Awards",
    date: "2025-10-05",
    location: "Kandy",
  },
  {
    id: 3,
    name: "Cricket Champions Match",
    date: "2025-10-15",
    location: "Galle",
  },
  {
    id: 4,
    name: "Annual Sports Awards",
    date: "2025-10-05",
    location: "Kandy",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="">
      <h1 className="text-2xl font-medium text-center">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded shadow-sm">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-500">{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
