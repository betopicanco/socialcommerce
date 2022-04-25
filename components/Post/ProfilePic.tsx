import Image from "next/image";
interface ProfilePicProps {
    pic: string
}


const ProfilePic = (props: ProfilePicProps) => {
    return (
        <span>
            <Image
                src={props.pic}
                alt={props.pic}
                width={32}
                height={33}
                className={`rounded-full`}
            />
        </span>
    );
};

export default ProfilePic;