import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBusinesses, getBusinessesWithFilters } from '@/utils/fetching';
// const queryClient = useQueryClient();

import BusinessCard from '@/components/BusinessCard';
import Pagination from '@/components/Pagination';

function SearchPage() {
    const [businesses, setBusinesses] = useState(null);
    const [currentLimit, setCurrentLimit] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const currentOffset = currentLimit * currentPage - currentLimit;
    const location = useLocation();
    const { searchInput } = location.state;
    
    // const { isLoading, error, data } = useQuery({
    //     queryKey:['businessesData'],
    //     queryFn: getBusinesses
    // })
    // useEffect(() => {
    //     if(data) {
    //         setBusinesses(data);
    //     }
    // }, [data])
    useEffect(() => {
        console.log("search page useEffect says searchInput has changed:", searchInput);
        const getData = async () => {
            const data = await getBusinessesWithFilters(searchInput, null, currentLimit, currentOffset);
            setBusinesses(data);
        }
        getData();
    }, [searchInput])
    // if(!isLoading && data) console.log("search page says:", data);
    function handlePageChange(page: string | number){
        console.log("searchPage says the current page is: ", page);
    }
    return (
        <div>
            <div>
                {businesses && `results count: ${businesses.length}`}
                <br></br>
                <Pagination totalPages={} currentPage={} onPageChange={handlePageChange}/>
                <br></br>
                <div>
                    {businesses && businesses.map(business => <BusinessCard key={business._id} businessInfo={business} />)}
                </div>
            </div>
        </div>
    )
}

export default SearchPage;