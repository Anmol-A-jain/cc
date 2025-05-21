import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PartnerJoin from './pages/PartnerJoin';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/partner/Dashboard';
import Leads from './pages/partner/Leads';
import SubPartners from './pages/partner/SubPartners';
import Earnings from './pages/partner/Earnings';
import Profile from './pages/partner/Profile';
import Resources from './pages/partner/Resources';
import AdminDashboard from './pages/admin/Dashboard';
import AdminPartners from './pages/admin/Partners';
import AdminLeads from './pages/admin/Leads';
import AdminPayments from './pages/admin/Payments';
import AdminContent from './pages/admin/Content';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner-join" element={<PartnerJoin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Partner Routes */}
            <Route element={<ProtectedRoute role="partner" />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/sub-partners" element={<SubPartners />} />
              <Route path="/earnings" element={<Earnings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resources" element={<Resources />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute role="admin" />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/partners" element={<AdminPartners />} />
              <Route path="/admin/leads" element={<AdminLeads />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/content" element={<AdminContent />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;