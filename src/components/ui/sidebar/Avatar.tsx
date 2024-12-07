import React from 'react'

interface ButtonProps {
  initials: string;
};

const Avatar: React.FC<ButtonProps> = ({ initials }) => {
  return (
    <span className="inline-flex items-center justify-center size-[30px] text-sm font-semibold leading-none rounded-full bg-red-avatar text-white">
      {initials}
    </span>
  )
}

export default Avatar