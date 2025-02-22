import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Certificate {
  id: string;
  course: string;
  studentId: string;
  name: string;
  result: string;
  resit: string;
  resitResults: string;
}

const CertificateValidator = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [searchResult, setSearchResult] = useState<Certificate | null>(null);
  // const [isSearched, setIsSearched] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [lastSearchedNumber, setLastSearchedNumber] = useState('');
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    fetch('/certificates.json')
      .then(response => response.json())
      .then(data => setCertificates(data.certificates))
      .catch(error => console.error('Error loading certificates:', error));
  }, []);
  console.log(certificates)
  const handleSearch = () => {
    const result = certificates.find(cert => cert.id === certificateNumber);
    setSearchResult(result || null);
    setLastSearchedNumber(certificateNumber);
    setHasSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertificateNumber(e.target.value);
  };  

  return (
    <div className="container mx-auto md:px-[88px] px-4 py-6 md:py-10 font-assistant">
      <div className="hidden md:flex items-center text-sm mb-4 md:mb-7">
        <a href="https://robere.com/" className="text-[#00316A] text-[13px]">Home</a>
        <span className="mx-2"><ChevronRight className='h-4 w-4'/></span>
        <span className='text-[13px] text-[#6A6A6A]'>Certificate Validator</span>
      </div>
      <h6 className="font-semibold text-sm mb-[50px] text-[#00316a]">Enter ULN number from your certificate</h6>
      <div className="flex flex-col md:flex-row gap-0 md:gap-4 mb-8">
        <input
          type="text"
          value={certificateNumber}
          onChange={handleInputChange}
          className="border border-[#c8c8c8] bg-[#F4F4F4] rounded mr-1 px-4 py-[11px] w-44 focus:outline-none"
          placeholder=""
          onKeyPress={handleKeyPress}
        />
        <button
        onClick={handleSearch} 
        className="bg-[#48A2F0] text-white text-[15px] px-[21px] py-[14px] rounded w-44 transition-all duration-300 shadow-[0px_17px_15px_-12px_#9f9f9f] hover:shadow-none">
          Search For Certificate
        </button>
      </div>
      {hasSearched && (
        // overflow-x-auto
        <div className="w-auto mt-10 -mb-6">
          {searchResult ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f4f4f4] border-2 border-[#c8c8c8] text-[13px] text-[#333333] align-text-top">
                  <th className="px-2 py-[12px] text-left font-normal">Course</th>
                  <th className="px-2 py-[12px] text-left font-normal">Student ID</th>
                  <th className="px-2 py-[12px] text-left font-normal">Name</th>
                  <th className="px-2 py-[12px] text-left text-[#333333]">RESULTS</th>
                  <th className="px-2 py-[12px] text-left font-normal">Resit</th>
                  <th className="px-2 py-[12px] text-left font-normal">Resit Results</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-[13px] text-[#333333]'>
                  <td className="px-2 py-2 align-text-top">
                    {searchResult.course}
                  </td>
                  <td className="px-2 py-2 align-text-top">{searchResult.studentId}</td>
                  <td className="px-2 py-2 align-text-top">{searchResult.name}</td>
                  <td className="px-2 py-2 font-bold align-text-top">{searchResult.result}</td>
                  <td className="px-2 py-2 align-text-top">{searchResult.resit}</td>
                  <td className="px-2 py-2 align-text-top">{searchResult.resitResults}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p className="text-[#333333] text-lg">No hits for: {lastSearchedNumber}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateValidator;