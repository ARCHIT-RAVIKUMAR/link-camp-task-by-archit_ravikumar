export default function Schedule() {
  const schedule = [
    { time: '09:00 AM', event: 'Opening Ceremony' },
    { time: '10:00 AM', event: 'Workshop 1: AI & Robotics' },
    { time: '12:00 PM', event: 'Lunch Break' },
    { time: '01:00 PM', event: 'Workshop 2: IoT Applications' },
    { time: '03:00 PM', event: 'Panel Discussion' },
    { time: '05:00 PM', event: 'Closing & Networking' },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-ieeeBlue mb-6">Event Schedule</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-ieeeBlue text-white">
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Event</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{item.time}</td>
              <td className="px-4 py-2">{item.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
