import { useEffect, useState } from 'react'
import {RiDeleteBin6Line, RiDownload2Line, RiEditLine} from "react-icons/ri";
import { BsCheckLg } from 'react-icons/bs';
import { apiRequest } from '../utils';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillLike, AiTwotoneLike, AiTwotoneMessage } from 'react-icons/ai';

export default function TableItem({applicants_item, allChecked, jobId}) {
    const {_id, profileUrl, firstName, lastName, category, email, cvDetails, cvUrl } =applicants_item;

    const { user } = useSelector((state) => state.user);

    const download = <RiDownload2Line />;
    const editLine = <RiEditLine />;
    const dustbin = <RiDeleteBin6Line />;
    const tick = <BsCheckLg />;
    const select = <AiTwotoneLike />;
    const selected = <AiFillLike />;
    const message = <AiTwotoneMessage />;

    const [checked2, setChecked2] = useState(false);
    //to store the value of checks before allChecked is true
    const [prevChecked, setPrevChecked] = useState(checked2);

    {/*individual items checkbox click handler*/}
    const updateChecked2 = ()=>{
        setChecked2(!checked2);
    };

    {/*reserve the previous values*/}
    const reserveCheckValues =()=>{
        if(!allChecked){
            setPrevChecked(checked2);
        }
    };

    //remove applicant api request
    const removeApplicant = async ()=>{
        if(jobId && _id){
            try{
                const res = await apiRequest({
                    url: `/jobs/${jobId}/applicants/${_id}`,
                    token: user?.token,
                    method: "DELETE",
                });

                if (res){
                    console.log("Applicant with id : "+ _id + "is not selected!");
                    // window.location.reload();
                }
            }
            catch (error){
                console.log(error);
            }

        }
    }

    useEffect(()=>{
        reserveCheckValues();
    }, [allChecked, checked2]);

    useEffect(()=>{
        if(allChecked){
            setChecked2(true);
        }
        else{
            setChecked2(prevChecked);
        }
    },[allChecked])

  return (
    <tr className='whitespace-nowrap [&>*]:border [&>*]:p-3 [&>*]:w hover:bg-[rgb(216,216,216,0.2)]'>

        <td className="">

            <span onClick={updateChecked2} className={`flex w-4 h-4 rounded-sm border items-center justify-center ${checked2?"border-secondary bg-secondary text-white transition-all duration-75":""}`}>

            {
                checked2 ?
                tick 
                :
                null
            }

            </span>

        </td>

        <td>

            <div className="grid grid-cols-[max-content_auto] gap-2">

                <img src={profileUrl} alt="deals-stat-img" className="w-[28px] h-[28px] rounded-full" />

                <span className="text-black capitalize">{firstName} {lastName}</span>

            </div>


        </td>

        <td>

            {email}

        </td>

        <td className=' text-[12px] grid grid-cols-2'>

            {
                cvUrl &&
                    <a href={cvUrl} target='blank' className='bg-primary/10 text-primary p-1 items-center justify-center flex rounded-[5px] cursor-pointer'>
                        View CV
                    </a>
            }

            {
                (cvDetails.personal || (cvDetails.languages && cvDetails.languages.length!=0)) &&
                    <Link to={`/user/${_id}/view-cv`} className=' bg-secondary/10 text-secondary p-1 ml-2 items-center justify-center flex rounded-[5px] cursor-pointer'>
                        View CV in website
                    </Link>
            }


        </td>

        {/* <td>

            <ColorfulText bg_color={bg_color} color={color} padding='4px 8px' borderRadius={4} fontSize={0.65} text={location} fontWeight={600} />

        </td> */}

        {/*icons here*/}
        <td>

            <div className="grid grid-cols-[28px_28px_28px] gap-2 border-none">

                <span className="bg-dash-green2/10 text-dash-green2 p-1 h-[28px] items-center justify-center flex rounded-[5px] cursor-pointer">
                    {select}
                </span>

                <span className="bg-dash-purple2/10 text-dash-purple2 p-1 h-[28px] items-center justify-center flex rounded-[5px] cursor-pointer">
                    {message}
                </span>

                {/*dustbin icon*/}
                {/*apply delete crud operation here*/}
                <span className="bg-dash-red/10 text-dash-red p-1 h-[28px] items-center justify-center flex rounded-[5px] cursor-pointer" onClick={()=>{
                    removeApplicant();
                }}>
                    {dustbin}
                </span>

            </div>

        </td>

        </tr>
  )
}
