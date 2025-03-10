import React, { useState, useEffect, useRef } from "react";

const SelectWithOptions = ({ label, name, options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Store user input
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term
    setIsOpen(true); // Open dropdown when typing
  };

  const handleSelect = (option) => {
    onSelect(option.value); // Pass selected option to parent
    setSearchTerm(option.label); // Update input with selected label
    setIsOpen(false); // Close dropdown
  };

  return (
    <div ref={containerRef} className="w-full relative h-[40px] border rounded-xl cursor-pointer">
      {/* Searchable Input */}
      <input
        type="text"
        name={name}
        autoComplete="off"
        placeholder={label}
        value={searchTerm}
        onChange={handleInputChange} // Allow typing
        onClick={() => setIsOpen(true)}
        className="border-none text-center w-full h-full placeholder-gray-400 text-white rounded-xl bg-transparent"
      />

      {/* Dropdown Options */}
      {isOpen && (
        <div className="w-full absolute de:max-h-[240px] mo:max-h-[200px] h-auto scrollbar-hide flex-col bg-black/40 justify-start overflow-y-scroll items-center top-[50px] left-0 backdrop-blur-3xl rounded-md border-[1px] border-solid  cursor-pointer">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="w-full cursor-pointer hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectWithOptions;
