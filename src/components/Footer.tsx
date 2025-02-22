import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="bg-white text-[#002d66] py-12 font-assistant">
        <div className="container mx-auto md:px-[88px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-12">
            <div className='col-span-5 text-[#B8B8B8] text-base'>
              <h3 className="font-bold mb-4">Robere & Associates (Thailand) Ltd. (Head Office)</h3>
              <p className="mb-1">193/104 Lake Rajada Office Complex,</p>
              <p className="mb-1">Unit C, 25th Floor, Rajadapisek Road Klongtoey</p>
              <p className="mb-4">Bangkok 10110</p>
              <p className="mb-4">Tel: 66 (0)2117-0894</p>
              <p className="mb-4">Fax: 66 (0)2258-5693</p>
              <p className="mb-4">Open 8:30am - 5:30pm</p>
            </div>
            
            <div className="hidden md:block col-span-2">
              <h3 className="text-[21px] font-semibold mb-2">Sitemap</h3>
              <ul className="space-y-1 text-base font-medium">
                <li><a href="https://robere.com/consulting/" className="hover:text-[#ee9823]">Consulting</a></li>
                <li><a href="https://robere.com/training/" className="hover:text-[#ee9823]">Training</a></li>
                <li><a href="https://robere.com/publishing/" className="hover:text-[#ee9823]">Publishing</a></li>
                <li><a href="https://robere.com/news-updates/" className="hover:text-[#ee9823]">News & Updates</a></li>
                <li><a href="https://robere.com/about/" className="hover:text-[#ee9823]">About</a></li>
                <li><a href="https://robere.com/contact/" className="hover:text-[#ee9823]">Contact</a></li>
              </ul>
            </div>
            
            <div className="hidden md:block col-span-2">
              <h3 className="text-[21px] font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-base font-medium">
                <li><a href="https://robere.com/faqs/" className="hover:text-[#ee9823]">FAQs</a></li>
                <li><a href="https://robere.com/terms-conditions/" className="hover:text-[#ee9823]">Terms and Conditions</a></li>
                <li><a href="https://robere.com/privacy-policy/" className="hover:text-[#ee9823]">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="hidden md:block col-span-2">
              <h3 className="text-[21px] font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/ROBERE-THAILAND-207897589248786/" className="text-[#48a2f0] hover:text-[#DF7357]">
                  <FontAwesomeIcon icon={faFacebook} className='h-[30px] w-[30px]' />
                </a>
                <a href="https://www.linkedin.com/company/robere-&-associates-r&a-/" className="text-[#48a2f0] hover:text-[#DF7357]">
                  <FontAwesomeIcon icon={faLinkedinIn} className='h-[30px] w-[30px]' />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Sitemap and Resources */}
          <div className="md:hidden mb-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[21px] font-semibold mb-2">Sitemap</h3>
              <ul className="space-y-1 text-base font-medium">
                <li><a href="https://robere.com/consulting/" className="hover:text-[#ee9823]">Consulting</a></li>
                <li><a href="https://robere.com/training/" className="hover:text-[#ee9823]">Training</a></li>
                <li><a href="https://robere.com/publishing/" className="hover:text-[#ee9823]">Publishing</a></li>
                <li><a href="https://robere.com/news-updates/" className="hover:text-[#ee9823]">News & Updates</a></li>
                <li><a href="https://robere.com/about/" className="hover:text-[#ee9823]">About</a></li>
                <li><a href="https://robere.com/contact/" className="hover:text-[#ee9823]">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[21px] font-semibold mb-2">Resources</h3>
              <ul className="space-y-1 text-base font-medium">
                <li><a href="https://robere.com/faqs/" className="hover:text-[#ee9823]">FAQs</a></li>
                <li><a href="https://robere.com/terms-conditions/" className="hover:text-[#ee9823]">Terms and Conditions</a></li>
                <li><a href="https://robere.com/privacy-policy/" className="hover:text-[#ee9823]">Privacy Policy</a></li>
              </ul>
            </div>

            <div className='col-span-2 mt-3'>
              <div className="flex space-x-2 justify-center items-center">
                <a href="https://www.facebook.com/ROBERE-THAILAND-207897589248786/" className="text-[#48a2f0] hover:text-[#DF7357]">
                  <FontAwesomeIcon icon={faFacebook} className='h-[30px] w-[30px]' />
                </a>
                <a href="https://www.linkedin.com/company/robere-&-associates-r&a-/" className="text-[#48a2f0] hover:text-[#DF7357]">
                  <FontAwesomeIcon icon={faLinkedinIn} className='h-[30px] w-[30px]' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0a1f75] text-[#B8B8B8] py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm mb-6">© 2018 Robere & Associates (Thailand) Ltd. All rights reserved.</p>
            <p className="mb-2 text-xs font-normal text-[#ffffff]">Powered by WisdmLabs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;