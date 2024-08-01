import { StyleSheet } from 'aphrodite'

export const useDialogFieldSection = () => {
  const stylesheet = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    label: {
      maxWidth: 'calc((100% / 3) - 8px)'
    },
    control: {
      flexShrink: 0,
      width: 'calc((100% / 3) * 2)'
    }
  })

  return stylesheet
}