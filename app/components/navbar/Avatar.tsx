'use client'

import Image from "next/image"

interface AvatarProps{
    src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( 
        <Image
            alt="Avatar"
            className="rounded-full"
            height="20"
            width="20"
            src={src || "/images/user.png"}
        />
     );
}
 
export default Avatar;