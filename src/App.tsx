import { useState } from 'react';
import Header from './components/Header';
import CertificateValidator from './components/CertificateValidator';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MessageMenu from './components/MessageMenu';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMobileMenuOpen} setIsMenuOpen={setIsMobileMenuOpen}/>
      <main className="flex-grow">
        <CertificateValidator />
        <ContactForm />
      </main>
      <Footer />
      <MessageMenu isHidden={isMobileMenuOpen}/>
    </div>
  );
}

export default App;