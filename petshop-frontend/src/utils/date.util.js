import { formatInTimeZone } from 'date-fns-tz'

const MS_IN_ONE_MONTH = 2629800000

export function formatDateToPetTable(date) {
    return formatInTimeZone(date, 'America/New_York', 'yyyy-MM-dd')
}

export function getPetMonthAge(date) {
    const today = new Date()
    const birthDate = new Date(date)

    const monthDiff = (today.getTime() - birthDate.getTime()) / MS_IN_ONE_MONTH

    return Math.trunc(monthDiff)
}