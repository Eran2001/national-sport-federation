import React from "react";

const news = [
  {
    id: 1,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  { id: 2, title: "Federation Partners with New Sponsor", date: "2025-08-10" },
  {
    id: 3,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  {
    id: 4,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  {
    id: 5,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  {
    id: 6,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  {
    id: 7,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
  {
    id: 8,
    title: "National Championships Start Next Week",
    date: "2025-08-20",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-blue-300">
      <h1 className="text-2xl font-medium text-center">Latest News</h1>
      <ul className="grid grid-cols-4 gap-4">
        {news.map((item) => (
          <li key={item.id} className="mb-2 border p-4 rounded-md">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm mt-4 text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestNews;
