import { FiGrid } from "react-icons/fi";

// components/Loading.js
const Empty = () => {
    return (
      <div className="flex justify-center gap-4 items-center h-screen">
          <FiGrid size={60} className="bg-blue-400" />
          <h4 className="text-center font-medium">No items found</h4>
      </div>
    );
  };
  
  export default Empty;
  