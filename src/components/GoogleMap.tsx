
interface GoogleMapProps {
  src: string;
  width?: string | number; // Allow width to be a string (e.g., "100%") or a number (pixels)
  height?: string | number; // Same for height
}

const GoogleMap: React.FC<GoogleMapProps> = ({ src, width = "600", height = "450" }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen={true} // Use boolean value
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;