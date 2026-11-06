import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    name: "Organic Farming Workshop",
    date: "15 November 2026",
    place: "Mangalore",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
    description: "Learn about organic farming methods and sustainable crop production."
  },
  {
    name: "Community Planting Day",
    date: "22 November 2026",
    place: "Udupi",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0f6e3c?w=800",
    description: "Participate in community planting and environmental awareness."
  },
  {
    name: "Composting Awareness",
    date: "5 December 2026",
    place: "Kundapura",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800",
    description: "Understand compost preparation and organic waste management."
  }
];

export default function Events() {
  return (
    <>
      <Navbar />

      <section className="bg-[#1b4332] text-white py-20">
        <div className="container-main">
          <p className="text-[#e9c46a] font-bold">LEARN AND PARTICIPATE</p>
          <h1 className="text-5xl font-extrabold mt-4">
            Agricultural Events
          </h1>
          <p className="mt-5 text-gray-200 max-w-xl leading-7">
            Explore farming workshops, community planting activities
            and sustainable agriculture programs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div className="card !p-0 overflow-hidden" key={event.name}>
              <img src={event.image} alt={event.name}
                className="h-56 w-full object-cover"/>
              <div className="p-6">
                <span className="text-xs bg-[#e8f5e9] text-[#1b4332] px-3 py-2 rounded-full">
                  Upcoming Event
                </span>
                <h2 className="font-bold text-xl text-[#1b4332] mt-5">
                  {event.name}
                </h2>
                <p className="text-gray-500 leading-7 mt-3">
                  {event.description}
                </p>
                <div className="flex gap-2 text-sm mt-5 text-gray-500">
                  <CalendarDays size={17}/> {event.date}
                </div>
                <div className="flex gap-2 text-sm mt-3 text-gray-500">
                  <MapPin size={17}/> {event.place}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  Sample event for frontend demonstration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}