import { useReducer } from 'react'

export default function {{blueprintInstance}}(initialState) {
  const [state, dispatch] = useReducer((state, payload) => {
    return {
      ...state,
      ...payload
    }
  }, initialState)

  return [state, dispatch]
}
