
import './index.css'; // or './main.css'

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Users, Home as HomeIcon, Info, Search, X, Phone, Mail, MapPin, User, Calendar } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseClasses = "font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg focus:ring-blue-300",
    danger: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg focus:ring-red-300",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 focus:ring-gray-300"
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Input = ({ className, ...props }) => (
  <input
    className={`border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm ${className}`}
    {...props}
  />
);

function Sidebar() {
  return (
    <aside className="w-72 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white flex flex-col h-full shadow-2xl">
      <div className="p-8 border-b border-blue-600/30">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">MediFlow</h1>
            <p className="text-blue-200 text-sm">Healthcare Management</p>
          </div>
        </div>
      </div>
      
      <nav className="flex flex-col mt-8 space-y-2 px-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-200 group"
        >
          <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link 
          to="/patients" 
          className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-200 group"
        >
          <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Patients</span>
        </Link>
        <Link 
          to="/about" 
          className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-200 group"
        >
          <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">About</span>
        </Link>
      </nav>
      
      <div className="mt-auto p-6 border-t border-blue-600/30">
        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-sm text-blue-200">Need help?</p>
          <p className="text-xs text-blue-300 mt-1">Contact support team</p>
        </div>
      </div>
    </aside>
  );
}

function Home() {
  const stats = [
    { label: "Total Patients", value: "1,234", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Active Cases", value: "89", icon: User, color: "from-green-500 to-green-600" },
    { label: "Appointments", value: "156", icon: Calendar, color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Welcome to MediFlow
        </h2>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          Professional patient record management dashboard designed for modern healthcare facilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent>
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button className="justify-center">
              <Users className="w-5 h-5 mr-2" />
              View All Patients
            </Button>
            <Button variant="secondary" className="justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          About MediFlow
        </h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          A comprehensive patient management system built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Patient Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Efficiently manage patient records, appointments, and medical history with our intuitive interface.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Search</h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly find patient information with our powerful search functionality and filtering options.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <CardContent>
          {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">React</p>
              <p className="text-sm text-gray-600">Frontend Framework</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">Tailwind CSS</p>
              <p className="text-sm text-gray-600">Styling</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">React Router</p>
              <p className="text-sm text-gray-600">Navigation</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">Lucide Icons</p>
              <p className="text-sm text-gray-600">Icons</p>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}

function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 1, name: "John Doe", age: 25, contact: "123-456-7890", email: "john@example.com", address: "New York", status: "Active" },
      { id: 2, name: "Jane Smith", age: 28, contact: "987-654-3210", email: "jane@example.com", address: "Los Angeles", status: "Active" },
      { id: 3, name: "Alice Johnson", age: 32, contact: "555-123-4567", email: "alice@example.com", address: "Chicago", status: "Inactive" },
      { id: 4, name: "Bob Williams", age: 40, contact: "444-987-6543", email: "bob@example.com", address: "Houston", status: "Active" },
      { id: 5, name: "Emma Brown", age: 22, contact: "333-222-1111", email: "emma@example.com", address: "Miami", status: "Active" },
    ];
    setPatients(mockData);
  }, []);

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Patient Records</h2>
          <p className="text-gray-600 mt-1">Manage and view patient information</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-xl shadow-lg p-2 border border-gray-200">
          <Search className="w-5 h-5 text-gray-400 ml-2" />
          <Input
            placeholder="Search patients by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-0 shadow-none focus:ring-0 focus:border-0 bg-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Card key={p.id} className="hover:border-blue-200">
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {p.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Age: {p.age}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{p.contact}</span>
                </div>
              </div>
              
              <Button
                className="w-full"
                onClick={() => setSelected(p)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && search && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No patients found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selected.name}</h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selected.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selected.status}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-semibold text-gray-800">{selected.age} years</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-semibold text-gray-800">{selected.contact}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-800">{selected.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-semibold text-gray-800">{selected.address}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setSelected(null)}
              >
                Close
              </Button>
              <Button
                className="flex-1"
                onClick={() => setSelected(null)}
              >
                Edit Patient
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <header className="bg-white/80 backdrop-blur-sm p-6 shadow-sm border-b border-gray-200/50 sticky top-0 z-40">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Patient Dashboard</h1>
                <p className="text-gray-600 text-sm">Healthcare Management System</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </header>
          <main className="p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/patients" element={<Patients />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
