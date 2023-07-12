export default function ({ store, redirect }) {
  // if the user is authenticated
  if (store.state.auth.currentUser) {
    return redirect('/');
  }
}
