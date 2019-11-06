export default function ({ from, route, redirect }) {
  if (from === undefined || from.name === route.name) {
    redirect('/')
  }
}
