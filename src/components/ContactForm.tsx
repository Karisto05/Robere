import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GoogleMap from './GoogleMap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    message: ''
  });

  // const center = {
  //   lat: 13.731724077031007,
  //   lng: 100.56031145767236
  // };

  return (
    <div className="bg-[linear-gradient(180deg,#1e48ab_0%,#0a1f78_100%)] text-white py-10 hidden md:block font-assistant">
      <div className="container mb-10 mx-auto px-[88px]">
        <div className="grid grid-cols-2 gap-14">
          {/* Contact Form Side */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch with Us</h2>
            <p className="mb-[52px] text-base text-[#b8b8b8]">
              If you'd like to contact us please send us a message through this contact form. 
              We'll do our best to get back to you as soon as possible. You can also give us 
              a phone call on 66 (0)2117-0894.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-base">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-4 rounded-sm text-black placeholder:text-[#48A5F1] focus:outline-none"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
              <input
                type="text"
                placeholder="Second Name"
                className="w-full px-4 py-4 rounded-sm text-black placeholder:text-[#48A5F1] focus:outline-none"
                value={formData.secondName}
                onChange={(e) => setFormData({...formData, secondName: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 text-base">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 rounded-sm text-black placeholder:text-[#48A5F1] focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-4 rounded-sm text-black placeholder:text-[#48A5F1] focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 rounded-sm mb-3 text-black placeholder:text-[#48A5F1] focus:outline-none"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <ReCAPTCHA
              sitekey="6Ld6ot4qAAAAAFkT3muoDztY5BKvyEXqB7UMjYOY"
              className="mb-8"
              theme="light"
            />
            <button className="bg-[#54a0ff] text-white text-[17px] font-bold px-7 py-3 rounded transition-all duration-300 shadow-[0_16px_8px_-8px_rgba(190,190,190,0.5)] hover:shadow-none">
              SEND
            </button>
          </div>

          {/* Map Side */}
          <div className="h-[540px] mt-8">
            {/* <LoadScript googleMapsApiKey="AIzaSyDIeYB8l1dyN-i3ldiHEKLZ9VRbzCjUcj4">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '0px' }}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript> */}
            <GoogleMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.7843837428095!2d100.56029!3d13.7315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1ae511d661%3A0xc9148d45704c3984!2sRobere%20%26%20Associates%20(Thailand)%20Ltd.!5e0!3m2!1sen!2sth!4v1740169792917!5m2!1sen!2sth" width="524" height="540"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;