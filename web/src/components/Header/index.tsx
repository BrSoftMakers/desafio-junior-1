import { signOut } from 'firebase/auth';

export function Header(props: any) {
  async function handleSignOut() {
    console.log('ei')
    signOut(props.auth)
      .then(() => alert('Usuário deslogado'))
      .catch((error) => alert(error))
      .finally()

    window.location.reload()
  }

  return (
    <div className="flex p-4">
        <div className="flex h-24">
          <img src="src/assets/logo.png" />
        </div>
        <div className="flex flex-col ml-5">
          <strong className="text-[#007599] text-3xl">PetShop Ave Maria</strong>
          <span>Riachão, Caruaru - PE</span>
          <span>(81) 9.9999-9999</span>
        </div>

        <form
          onSubmit={handleSignOut}
        >
        <button
          className="w-[36px] h-[36px] absolute bottom-3 left-3 md:bottom-8 md:left-8"
          type="submit"
        >
          <img className="w-22 h-22" src="src/assets/logout.png" />
        </button>
        </form>
    </div>
  )
}