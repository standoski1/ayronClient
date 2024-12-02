import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { LogoutUser, updateUser } from "@/redux/userSlice";

const Filter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { userDetails } = useSelector((state: any) => state.user);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  const handleFilter = (e:any)=>{
    const lowercasedSearch = e.toLowerCase();
    const filtered = userDetails?.data.filter((item:any) =>
      item.title.toLowerCase().includes(lowercasedSearch) ||
      item.description.toLowerCase().includes(lowercasedSearch)
    );
    dispatch(updateUser(filtered))
  }

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative mr-8">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block mr-[-10px]">
          <span className="block text-sm font-medium text-black dark:text-white">
            Filter
          </span>
        </span>
        <svg fill="#525252" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	      viewBox="0 0 300.906 300.906">
            <g>
                <g>
                    <path d="M288.953,0h-277c-5.522,0-10,4.478-10,10v49.531c0,5.522,4.478,10,10,10h12.372l91.378,107.397v113.978
                        c0,3.688,2.03,7.076,5.281,8.816c1.479,0.792,3.101,1.184,4.718,1.184c1.94,0,3.875-0.564,5.548-1.68l49.5-33
                        c2.782-1.854,4.453-4.977,4.453-8.32v-80.978l91.378-107.397h12.372c5.522,0,10-4.478,10-10V10C298.953,4.478,294.476,0,288.953,0
                        z M167.587,166.77c-1.539,1.809-2.384,4.105-2.384,6.48v79.305l-29.5,19.666V173.25c0-2.375-0.845-4.672-2.384-6.48L50.585,69.531
                        h199.736L167.587,166.77z M278.953,49.531h-257V20h257V49.531z"/>
                </g>
            </g>
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul 
        onClick={()=>handleFilter("")}
        className="flex flex-col cursor-pointer gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            Clear Filter
        </ul>
        <button 
        onClick={()=>handleFilter("Azure")}
        className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          Azure
        </button>
        <button 
        onClick={()=>handleFilter("AWS")}
        className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          AWS
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default Filter;
