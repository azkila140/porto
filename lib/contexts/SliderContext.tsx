'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface SliderContextType {
    currentGradient: string
    setCurrentGradient: (gradient: string) => void
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

export function SliderProvider({ children }: { children: ReactNode }) {
    const [currentGradient, setCurrentGradient] = useState('from-blue-600 to-cyan-500')

    return (
        <SliderContext.Provider value={{ currentGradient, setCurrentGradient }}>
            {children}
        </SliderContext.Provider>
    )
}

export function useSlider() {
    const context = useContext(SliderContext)
    if (context === undefined) {
        throw new Error('useSlider must be used within a SliderProvider')
    }
    return context
}
