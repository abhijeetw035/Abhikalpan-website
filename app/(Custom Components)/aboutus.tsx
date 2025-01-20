import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-12 px-6">
       
        <div className="w-full md:w-1/2 text-white space-y-6">
          <h1 className="text-4xl font-bold">What is Abhikalpan?</h1>
          <p className="text-lg leading-relaxed">
            ABHIKALPAN is the annual technical fest of IIITDM Jabalpur, an institute that boasts technical
            superiority and innovation in what it builds. It's central India's biggest technical extravaganza for
            creating, nurturing, and fueling one’s interest in various domains of computer science, robotics,
            electronics, gaming, and design.
          </p>
          <p className="text-lg leading-relaxed">
            In conjunction with the various technical events, informal events keep the fest alive. The events
            attracting thousands include Robowar, Circuit master, Brand presentation, and Astronomy quiz, among
            others.
          </p>
       
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-full bg-teal-700 hover:bg-teal-900">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#" className="p-3 rounded-full bg-teal-700 hover:bg-teal-900">
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a href="#" className="p-3 rounded-full bg-teal-700 hover:bg-teal-900">
              <i className="fab fa-linkedin text-white"></i>
            </a>
          </div>
        </div>

       
        <div >
          image
        </div>
      </div>
    </div>
  );
}
