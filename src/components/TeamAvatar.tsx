import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const ProfileImg = React.lazy(() => import('@/components/ui/profile-img'));

type UserCardProps = {
    name: string;
    role: string;
    bio?: string;
    avatar: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
};

const UserCard: React.FC<UserCardProps> = ({
    name,
    role,
    bio,
    avatar,
    github,
    linkedin,
    twitter,
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100 min-w-[60vw] sm:min-w-[300px]">
            <ProfileImg
                src={avatar}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-indigo-600 font-medium">{role}</p>

            {bio && (
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{bio}</p>
            )}

            <div className="flex justify-center gap-4 mt-4">
                {github && (
                    <a href={github} target="_blank" className="text-gray-500 hover:text-black" onClick={(e) => { if (!github) e.preventDefault(); }}>
                        <Github size={18} />
                    </a>
                )}

                {linkedin && (
                    <a href={linkedin} target="_blank" className="text-gray-500 hover:text-blue-600" onClick={(e) => { if (!linkedin) e.preventDefault(); }}>
                        <Linkedin size={18} />
                    </a>
                )}

                {twitter && (
                    <a href={twitter} target="_blank" className="text-gray-500 hover:text-sky-500" onClick={(e) => { if (!twitter) e.preventDefault(); }}>
                        <Twitter size={18} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default UserCard;