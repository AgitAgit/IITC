import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBusinesses } from '@/utils/fetching';
// const queryClient = useQueryClient();

function SearchPage() {
    const { isLoading, error, data } = useQuery({
        queryKey:['businessesData'],
        queryFn: getBusinesses
    })
    if(!isLoading && data) console.log("search page says:", data);
    return (
        <div>SearchPage</div>
    )
}

export default SearchPage;