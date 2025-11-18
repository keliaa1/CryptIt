import { NextResponse } from "next/server";
export async function Get(){
    const api =  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    try{
        const res = await fetch(api,{
            next:{revalidate: 0}
        });

        if(!res.ok){
            return NextResponse.json({error: "Failed to fetch data"}, {status: 500});
            const data = await res.json();

            return NextResponse.json(data);
        }
    }catch(err:any){
        return NextResponse.json({error: err.message}, {status: 500});
    }
}