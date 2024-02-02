import { useEffect, useState } from 'react';
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";
import { apiRequest } from '../utils';
import TableItem from '../components/TableItem';

export default function Applicants() {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
    
    const head = [
        "Applicant",
        "Mail",
        "Profile",//here cv will be shown
        "Action"//applicant selected or rejected
    ]
    const arrowRight = <BiRightArrowAlt />;
    const tick = <BsCheckLg />;
    const [allChecked, setAllChecked] = useState(false);
    const [applicants, setApplicants] = useState([]);

    const updateAllChecked = ()=>{
        setAllChecked(!allChecked);
    };

    const getApplicants = async ()=>{
        if(id){
            try{
                const res = await apiRequest({
                    url: `/jobs/${id}/applicants`,
                    token: user?.token,
                    method: "GET",
                });

                if (res){
                    setApplicants(res);
                    // window.location.reload();
                }
            }
            catch (error){
                console.log(error);
            }

        }
    }

    useEffect(()=>{
        getApplicants();
    }, []);
    
    //for pagination
    const itemsPerTable = 6;
    const tablesPresent = Math.ceil(applicants.length / itemsPerTable);

    const [currentTable, setCurrentTable] = useState(0);

    const updateCurrentTable = (mode)=>{
        switch(mode){
            case "prev":
                setCurrentTable(currentTable==0?currentTable:currentTable-1);
                break;
            
            case "next":
                setCurrentTable(currentTable==tablesPresent-1?currentTable:currentTable+1);
                break;
            
            default:
                console.log("invalid case in prev next handling in table of deals statistics");
            }
    };

  return (
    <div className='bg-white rounded-lg'>
                  
        <div className={`border-b-[1px] flex justify-between capitalize p-2`}>

            <div className="flex items-center gap-2">

                <div className="w-[3px] h-[18px] rounded-lg flex flex-col overflow-hidden">

                    <span className="block bg-primary h-1/2"></span>

                    <span className="block bg-secondary h-1/2"></span>

                </div>

                <h3 className='font-bold'>
                    Applicants
                </h3>

            </div>
            
        </div>

        {/*table*/}
        <div className="">
    
            <div className='overflow-x-auto table-scrollbar rounded-sm p-5 border-b'>

                {/*table*/}
                <table className='w-full border-[1px] border-collapse text-left'>

                    <thead className='border-[1px] text-sm font-medium'>

                        <tr className='[&>*]:border-[1px]'>

                        <th className="p-3">

                            {/*checkbox component*/}
                            <span onClick={()=>{
                            updateAllChecked();
                            }} className={`flex w-4 h-4 rounded-sm border items-center justify-center ${allChecked?"border-secondary bg-secondary text-white transition-all duration-75":""}`}>

                            {
                                allChecked ?
                                tick 
                                :
                                null
                            }

                        </span>

                        </th>

                        {

                            head.map((head_item,i)=>{
                            return (
                                <th key={i} className="p-3">

                                {head_item}

                                </th>
                            )
                            })
                        }

                        </tr>

                    </thead>

                    <tbody className='text-[0.84rem] font-medium text-gray-800'>

                        {
                        applicants.slice(currentTable*itemsPerTable, (currentTable+1)*itemsPerTable).map((applicants_item)=>{

                            return (
                            <TableItem applicants_item={applicants_item} key={applicants_item._id} jobId={id} allChecked={allChecked} />
                            )
                        })
                        }
                    </tbody>
                </table>

            </div>

            {/*controller*/}
            <div className="flex justify-between items-center text-sm text-gray-700 p-5 py-4">

                <div className="flex gap-2 items-center">

                    <span>
                        Showing {itemsPerTable} Entries 
                    </span>

                    <span>
                        {arrowRight}
                    </span>

                </div>

                <div className="flex gap-1 items-center">

                    {/*prev button*/}
                    <Button variant="text" sx={{color: "#0047AB", textTransform:"capitalize", fontSize:"0.78rem"}} onClick={()=>{updateCurrentTable("prev");}}>Prev</Button>

                    {/*page numbers container*/}
                    <div className="flex gap-2 shrink-0">

                        {
                        Array(tablesPresent).fill("").slice(currentTable,currentTable+2).map((_,i)=>{
                            return (
                            <span key={i} className={`${i==0?"bg-primary/90 text-white hover:bg-primary/80":"hover:text-primary hover:bg-slate-100"} flex w-7 h-7 rounded-md items-center justify-center shrink-0 font-medium text-sm cursor-pointer`} onClick={()=>{setCurrentTable(currentTable+i);}}>
                                
                                {currentTable+i+1}

                            </span>
                            )
                        })
                        }
                    </div>

                    {/*next button*/}
                    <Button variant="text" sx={{color: "#0047AB", textTransform:"capitalize", fontSize:"0.78rem"}} onClick={()=>{updateCurrentTable("next");}}>Next</Button>

                </div>

            </div>

        </div>

    </div>
  )
}
