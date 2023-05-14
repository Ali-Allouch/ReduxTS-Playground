export interface RouterProps {
  isAuthenticated: boolean
}

export const useRouter = (props: RouterProps) => {
  return {
    ...props,
  }
}
