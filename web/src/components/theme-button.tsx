'use client'

import { useTheme } from 'next-themes'
import { RxMoon, RxSun } from 'react-icons/rx'

import { Button } from '@/components/ui/button'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const onToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button variant="ghost" className="text-lg" onClick={onToggleTheme}>
      {theme === 'light' ? <RxSun /> : <RxMoon />}
    </Button>
  )
}
