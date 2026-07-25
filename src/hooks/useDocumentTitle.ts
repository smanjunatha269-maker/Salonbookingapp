import { useEffect } from 'react'
import { APP_NAME } from '../utils/constants'

/** Sets the browser tab title for the current page. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} · ${APP_NAME}`
  }, [title])
}
