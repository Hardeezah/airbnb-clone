'use client'

import Image from "next/image";
import Heading from "../components/Heading";
import useCountries from "../hooks/useCountries";
import { SafeUser } from "../types";
import HeartButton from "../components/HeartButton";

interface ListingHeadProps{
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
}) => {
    const {getByValues} = useCountries();

    const location = getByValues(locationValue);

    return ( 
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />

            <div className="
                w-full
                h-[60vh]
                overflow-hidden
                rounded-xl
                relative
            ">
                <Image
                    alt="Image"
                    src={imageSrc}
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>

     );
}
 
export default ListingHead;