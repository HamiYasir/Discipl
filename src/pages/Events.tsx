// import React, { useState, useEffect } from 'react';
// import { Calendar, MapPin, Users, Clock, Search, Award } from 'lucide-react';
// import axios from 'axios';

// // 1. Update the interface to include judgingCriteria
// interface IEvent {
//   _id: string;
//   name: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   category: string;
//   participants: number;
//   maxParticipants: number;
//   fee: number;
//   imageUrl: string;
//   judgingCriteria?: string[]; // It's optional as older events might not have it
// }

// const Events = () => {
//   const [events, setEvents] = useState<IEvent[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // const response = await axios.get('https://discipl-server.onrender.com/api/events');  // Used for github deployment
//         const response = await axios.get('http://localhost:8172/api/events'); //  Used for localhost testing
//         console.log(response.data); // DEBUG
//         setEvents(response.data);
//       } catch (err) {
//         setError('Failed to load events. Please try again later.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
//     });
//   };

  // const getCategoryColor = (category: string) => {
  //   const colors: { [key: string]: string } = {
  //     'Challenge': 'bg-red-100 text-red-800', 'Workshop': 'bg-blue-100 text-blue-800',
  //     'Competition': 'bg-purple-100 text-purple-800', 'Seminar': 'bg-green-100 text-green-800',
  //     'Training': 'bg-orange-100 text-orange-800', 'Dance': 'bg-pink-100 text-pink-800'
  //   };
  //   return colors[category] || 'bg-gray-100 text-gray-800';
  // };

//   const filteredEvents = events.filter(event =>
//     event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-center">
//         <div>
//           <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero and Search Sections */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 text-black sm: h-[15rem] md: h-[15rem]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Fitness <span className="text-red-500">Events</span>
//             </h1>
//             <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
//               Discover exciting fitness events, competitions, and workshops in your area
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="py-8 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <h2 className="text-2xl font-bold text-black">Upcoming Events</h2>
//             <div className="relative w-full md:w-96">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search events..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//             </div>
//           </div>
//           {searchTerm && (
//             <div className="mt-4 text-gray-600">
//               Found {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} matching "{searchTerm}"
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Events Grid */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredEvents.length === 0 ? (
//             <div className="text-center py-12">
//               <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
//               <h3 className="text-xl font-semibold text-gray-700">No events found</h3>
//               <p className="text-gray-500">
//                 {searchTerm ? `No events match "${searchTerm}".` : 'Check back later for new events!'}
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredEvents.map((event) => (
//                 <div
//                   key={event._id}
//                   className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
//                 >
//                   <div className="relative">
//                     <img
//                       src={event.imageUrl || 'https://placehold.co/600x400/f87171/white?text=Event'}
//                       alt={event.name}
//                       className="w-full h-48 object-cover"
//                     />
                  //  <div className="absolute top-4 left-4">
                  //    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                  //      {event.category}
                  //    </span>
                  //  </div>
//                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
//                       <span className="text-lg font-bold text-red-500">₹{event.fee}</span>
//                     </div>
//                   </div>
//                   <div className="p-6 flex flex-col flex-grow">
//                     <h3 className="text-xl font-bold text-black mb-3">{event.name}</h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{event.description}</p>

//                     {event.judgingCriteria && event.judgingCriteria.length > 0 && (
//                       <div className="mb-4">
//                         <div className="flex items-center text-sm font-bold text-gray-800 mb-2">
//                            <Award className="w-4 h-4 mr-2 text-red-500" />
//                            <span>Judging Criteria</span>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                           {event.judgingCriteria.map((criterion, index) => (
//                             <span key={index} className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
//                               {criterion}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

                    // <div className="space-y-2 mb-4">
                    //   <div className="flex items-center text-gray-700">
                    //     <Calendar className="w-4 h-4 mr-2 text-red-500" />
                    //     <span className="text-sm">{formatDate(event.date)}</span>
                    //   </div>
                    //   <div className="flex items-center text-gray-700">
                    //     <Clock className="w-4 h-4 mr-2 text-red-500" />
                    //     <span className="text-sm">{event.time}</span>
                    //   </div>
                    //   <div className="flex items-center text-gray-700">
                    //     <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    //     <span className="text-sm">{event.location}</span>
                    //   </div>
                      // <div className="flex items-center text-gray-700">
                      //   <Users className="w-4 h-4 mr-2 text-red-500" />
                      //   <span className="text-sm">{event.participants}/{event.maxParticipants} participants</span>
                      // </div>
                    // </div>
                    // <div className="flex items-center justify-between">
                    //   <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    //     <div
                    //       className="bg-red-500 h-2 rounded-full"
                    //       style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    //     ></div>
                    //   </div>
//                       <span className="text-xs text-gray-500 whitespace-nowrap">
//                         {Math.round((event.participants / event.maxParticipants) * 100)}% full
//                       </span>
//                     </div>
//                     <button className="w-full mt-4 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600">
//                       Register Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Events;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Award, Calendar, MapPin, Users, Clock, Search } from "lucide-react";

interface IEvent {
  _id: string;
  name: string;
  description: string;
  judgingCriteria: string[];
  org_email: string;
  org_phone_no: string;
  socialMedia: { platform: string; handle: string }[];
  date: string;
  time: string;
  location: string;
  category: string;
  fee: number;
  participants: number;
  maxParticipants: number;
  imageUrl?: string;
  prize_sponsorship: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const openModal = (event: IEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8172/api/events");

        if (Array.isArray(res.data)) {
          setEvents(res.data);
        } else if (Array.isArray(res.data.events)) {
          setEvents(res.data.events);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Challenge': 'bg-red-100 text-red-800', 'Workshop': 'bg-blue-100 text-blue-800',
      'Competition': 'bg-purple-100 text-purple-800', 'Seminar': 'bg-green-100 text-green-800',
      'Training': 'bg-orange-100 text-orange-800', 'Dance': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading events...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Upcoming Events
      </h1>
      {events.length === 0 ? (
        <p className="text-center text-gray-600">No events available</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              onClick={() => openModal(event)}
              className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <img
                src={
                  event.imageUrl ||
                  "https://placehold.co/600x400/f87171/white?text=Event"
                }
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">
                  {event.name}
                </h2>

                {/* Judging Criteria on card
                {event.judgingCriteria && event.judgingCriteria.length > 0 && (
                  // </div>
                  <div className="mb-4">
                    <div className="flex items-center text-sm font-bold text-gray-800 mb-2">
                        <Award className="w-4 h-4 mr-2 text-red-500" />
                        <span>Judging Criteria</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.judgingCriteria.map((criterion, index) => (
                        <span key={index} className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                          {criterion}
                        </span>
                      ))}
                    </div>
                  </div>
                )} */}

                <span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </span>

                <div className="mt-4 space-y-1 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-red-500" />{formatDate(event.date)}
                  </span>
                  
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-red-500" />{event.time}
                  </span>
                  
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />{event.location}
                  </span>
                  
                  <div className="mt-5 space-y-2 pb-4 pt-5">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm">{event.participants}/{event.maxParticipants} participants</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal remains same (full judging criteria shown) */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {selectedEvent.name}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-8 overflow-y-auto space-y-6">
              <img
                src={
                  selectedEvent.imageUrl ||
                  "https://placehold.co/600x400/f87171/white?text=Event"
                }
                alt={selectedEvent.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              <div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedEvent.category)}`}>
                  {selectedEvent.category}
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-medium text-black mb-0">Description:</p>
                <div className="border p-4 pt-1 pl-3 rounded-lg bg-gray-50">
                  <p className="text-gray-700">{selectedEvent.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Date:</span> {formatDate(selectedEvent.date)}</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Time:</span> {selectedEvent.time }</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Location:</span> {selectedEvent.location}</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Fee:</span> {selectedEvent.fee}</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Participants:</span> {selectedEvent.participants}/{selectedEvent.maxParticipants}</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <p className="text-medium"><span className="text-black">Prize:</span> {selectedEvent.prize_sponsorship}</p>
                </div>

                {/*Organizer Details*/}
                <div className="border rounded-lg bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2 p-4 pt-1 pl-3 pb-0">Organizer Details</h3>

                  <div className="flex flex-row text-gray-700 gap-6 p-5 pt-1 pb-3">
                    <div className="flex flex-col gap-2 mb-2 pt-2">
                      <p className="text-black text-lg">Email:</p> 
                      <p className="text-black text-lg">Phone Number:</p>    
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                      <div className="bg-white border rounded-lg border-black p-4 pl-2 pt-1 pb-1">{selectedEvent.org_phone_no}</div>
                      <div className="bg-white border rounded-lg border-black p-4 pl-2 pt-1 pb-1">{selectedEvent.org_email}</div>
                    </div>
                  </div>

                  <div className="text-medium">
                    {selectedEvent.socialMedia && selectedEvent.socialMedia.length > 0 && (
                      <div className="flex flex-row gap-4 mb-2 p-4 pt-1 pl-3 pb-0 justify-space-between">
                        {selectedEvent.socialMedia.map((link, index) => (
                          <div className="flex flex-row gap-1" key={index}>
                            <h4>{link.platform}: </h4>
                            <p>{link.handle}</p>
                          </div>
                        ))}
                      </div>
                    )}                  
                  </div>
                </div>
              </div>

              {selectedEvent.judgingCriteria &&
                selectedEvent.judgingCriteria.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">Judging Criteria</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedEvent.judgingCriteria.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}              
            </div>

            <div className="flex justify-end items-center p-4 border-t border-gray-200 space-x-4 flex-shrink-0">
              <button
                onClick={closeModal}
                className="px-6 py-3 rounded-full font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-3 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
