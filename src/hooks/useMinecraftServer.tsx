import useSWR from 'swr'

export const useServerStatus = (address = 'mc.rally.gg') => {
  const { data, isLoading, error } = useSWR(
    `https://api.mcsrvstat.us/2/${address}`,
    {
      refreshInterval: 60 * 1000, // Refresh every 1 minutes
    }
  )

  return {
    status: {
      online: false,
      color: isLoading
        ? 'text.secondary'
        : data?.online
        ? 'success.500'
        : 'danger.500',
      ...data,
    },
    isLoading,
    isError: error,
  }
}
