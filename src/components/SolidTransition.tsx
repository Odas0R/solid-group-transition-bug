import { createSignal } from "solid-js"
import { Transition } from "solid-transition-group"

export const SolidTransition = () => {
  const [isOpen, setOpen] = createSignal(false)

  return (
    <div>
      <Transition>{isOpen() && <div>hello</div>}</Transition>
    </div>
  )
}
