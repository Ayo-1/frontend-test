import React, { ReactNode } from 'react'

type TopButtonProps = {
    children: ReactNode
}
export default function TopButton({ children }: TopButtonProps) {
    return (
        <button className="py-3 w-full flex items-center justify-center bg-gray-one rounded-[10px]">
            <div className="flex items-center gap-2">
                {children}
            </div>
        </button>
    )
}
