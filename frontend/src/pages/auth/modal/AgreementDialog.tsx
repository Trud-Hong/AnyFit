import { useEffect, useRef, type ReactNode } from "react"

type AgreementDialogProps = {
    title: string
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

function AgreementDialog({title, isOpen, onClose, children}: AgreementDialogProps) {

    // 약관창 참조
    const dialogRef = useRef<HTMLDialogElement>(null)

    // 열림 상태를 실제 dialog에 반영
    useEffect(() => {
        const dialog = dialogRef.current

        if(!dialog) return

        if(isOpen){
            if(!dialog.open) dialog.showModal()
        }else{
            if(dialog.open) dialog.close()
        }
    }, [isOpen])

    return(
        <dialog
            ref={dialogRef}
            onClose={onClose}
            aria-labelledby="agreement-title"
            className="fixed inset-0 m-auto w-[calc(100%-48px)] max-w-lg rounded-xl bg-white p-6 text-[#142E3B] shadow-xl backdrop:bg-black/40"
        >
            <h2 id="agreement-title" className="text-xl font-bold">{title}</h2>

            <div className="mt-4 max-h-[50vh] overflow-y-auto text-sm leading-6 text-[#697A85]">
                <p>{children}</p>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer rounded-md bg-[#112E39] px-5 py-2 text-sm text-white"
                >
                    닫기
                </button>
            </div>
        </dialog>
    )
}

export default AgreementDialog