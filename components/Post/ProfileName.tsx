interface ProfileNameProps {
    name: string
}
const ProfileName = (props: ProfileNameProps) => {
    const { name } = props;
    return (
        <span className={`
            text-white pl-2 leading-8 text-sm
        `}>{ name }</span>
    );
}

export default ProfileName;