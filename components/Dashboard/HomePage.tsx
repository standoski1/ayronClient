"use client";

import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import withAuth from "@/app/WithAuth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { callGet } from "@/redux/userSlice";
import RecommendationCard from "./Card";
import Loader from "../common/Loader";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { postLoading } = useSelector((state: any) => state.user);
  const [userData, setUserData] = useState<any[]>([])
  const [secPage, setSecPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  
  useEffect(() => {
    fetchReccom();
  }, []);

  const fetchReccom = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const { payload } = await dispatch(
      callGet({ header: headers, endpoint: `recommendations?cursor=1&limit=10` })
    );
    setUserData(payload?.data)
    if (!payload?.data || payload?.data?.length < 10) {
      setHasMore(false);
    }
  };

  const fetchMoreReccom = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const { payload } = await dispatch(
      callGet({ header: headers, endpoint: `recommendations?cursor=${secPage}&limit=10` })
    );
    setUserData([...userData, ...payload?.data]);
    if (!payload?.data || payload?.data?.length < 10) {
      setHasMore(false);
    } else {
      setSecPage((prev) => prev + 1);
    }
  };

  return (
    <div className="">
      {postLoading && userData.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={userData?.length}
          next={fetchMoreReccom}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={
            <p style={{ textAlign: "center", marginTop: "1rem", color: "#9b9898" }}>
              <b>Update search filter for more results...</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.map((data: any, i: number) => (
              <RecommendationCard key={i} data={data} i={i} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {!postLoading && userData.length === 0 && (
        <p className="text-center mt-5">No Data Available</p>
      )}
    </div>
  );
};

export default withAuth(HomePage);
