import ScoreDots from "./Dots";

const RecommendationCard = ({data,i}:{data:any,i:number}) => {
    console.log(data)
    return (
      <div key={i} className="bg-white mb-3 border border-gray-200 shadow-md rounded-lg p-6 flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 9.75l4.5 4.5m0 0l-4.5 4.5m4.5-4.5l4.5-4.5m-9 9V5.25m9 14.25H9m6 0H9m-3.75 0h11.25m0-14.25H5.25m0 14.25v-14.25M12 5.25v-.75"
                />
              </svg>
            </div> */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{data?.title}</h3>
              <div className="flex">
                {data?.frameworks?.map((data2:any,i:number)=>(
                <p key={i} className="text-sm text-gray-500 pl-4">{data2?.name}</p>
                ))}
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
          <svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M41.09 10.45l-2.77-3.36c-.56-.66-1.39-1.09-2.32-1.09h-24c-.93 0-1.76.43-2.31 1.09l-2.77 3.36c-.58.7-.92 1.58-.92 2.55v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-25c0-.97-.34-1.85-.91-2.55zm-17.09 24.55l-11-11h7v-4h8v4h7l-11 11zm-13.75-25l1.63-2h24l1.87 2h-27.5z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
          </button>
        </div>
  
        {/* Description Section */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {data?.description}
        </p>
  
        {/* Tag Section */}
        <div className="flex flex-wrap gap-2">
          {data?.affectedResources?.map((data2:any,i:number)=>(
          <span key={i} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {data2?.name}
          </span>
          ))}
        </div>
  
        {/* Footer Section */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <div>
            <p className="text-xs text-gray-500">Impact Assessment</p>
            <p className="text-sm font-medium text-gray-800">
                ~{data?.impactAssessment?.totalViolations} Violations / month
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Value Score</p>
            <ScoreDots score={data?.score}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecommendationCard;
  