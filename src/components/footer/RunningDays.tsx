import { useLayoutEffect, useState } from 'react'
import { footer } from '@/config.json'
import { getDiffInDays } from '@/utils/date'

export function RunningDays() {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.startTime))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>Oops! The website hasn't been released yet.</span>
  }

  return <span>Has been running for {days} days</span>
}
