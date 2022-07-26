export function toast(message,type='success') {
  ElNotification({
    message,
    type,
    duration: 2000
  })
}