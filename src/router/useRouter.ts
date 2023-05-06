export interface RouterProps {
  isAuthenticated: boolean
  login: () => void
}

export const useRouter = (props: RouterProps) => {
  return {
    ...props,
  }
}
