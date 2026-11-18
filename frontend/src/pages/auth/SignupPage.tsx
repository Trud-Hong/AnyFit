import { useRef, useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import AgreementDialog from "./modal/AgreementDialog"
import AuthBrandPanel from "./AuthBrandPanel"

// 약관 항목 키 타입
type AgreementKey = 'terms' | 'privacy' | 'marketing'

function SignupPage(){

    // 개별 약관 동의 상태
    const [agreements, setAgreements] = useState({
        terms: false,
        privacy: false,
        marketing: false,
    })

    // 모든 약관에 동의했는지 확인
    const allAgreed = agreements.terms && agreements.privacy && agreements.marketing

    // 개별 약관 동의 변경
    function handleAgreementChange(key: AgreementKey, checked: boolean){
        setAgreements((previous) => ({
            ...previous,
            [key]: checked,
        }))
    }

    // 모든 약관 일괄 선택&해제
    function handleAllAgreementChange(checked: boolean){
        setAgreements({
            terms: checked,
            privacy: checked,
            marketing: checked,
        })
    }

    // 현재 열려 있는 약관
    const [activeAgreement, setActiveAgreement] = useState<AgreementKey | null>(null)

    // 선택한 약관 제목
    const agreementTitle = activeAgreement === 'terms' ? '이용약관' : activeAgreement === 'privacy' ? '개인정보 수집 및 이용' : activeAgreement === 'marketing' ? '마케팅 정보 수신' : ''

    // 비밀번호 입력란 참조
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)

    // 비밀번호 일치 검사
    function validatePasswordMatch(){
        const password = passwordRef.current
        const confirmation = passwordConfirmRef.current

        if(!password || !confirmation) return

        const misMatch = confirmation.value !== '' && password.value !== confirmation.value

        confirmation.setCustomValidity(misMatch ? '비밀번호가 일치하지 않습니다.' : '',)
    }

    // 제출 안내 문구
    const [submitMessage, setSubmitMessage] = useState('')
    
    // 검증 통과 후 회원가입 제출 처리
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const signupData = {
            name: String(formData.get('name') ?? '').trim(),
            email: String(formData.get('email') ?? '').trim(),
            password: String(formData.get('password') ?? '').trim(),
            marketingAgreed: agreements.marketing,
        }

        // 비밀번호를 제외하고 수집 결과 확인
        console.log({
            name: signupData.name,
            email: signupData.email,
            marketingAgreed: signupData.marketingAgreed
        })

        setSubmitMessage('입력 검증을 통과했습니다. 실제 회원가입 연결 아직 미구현')
    }
    
    return (
        <main className={"flex min-h-screen bg-white"}>
            {/* 왼쪽 브랜드 소개 */}
            <AuthBrandPanel/>

            {/* 오른쪽 회원가입 영역 */}
            <section className="flex min-h-screen min-w-0 flex-1 items-center justify-center px-6 py-10">
                <div className="w-full max-w-[400px]">
                    <Link to="/login" className="mb-8 block text-[24px] font-bold text-[#112E39] lg:hidden">AnyFit</Link>
                    <div className="mb-6">
                        <h2 className="text-[30px] font-bold text-[#142E3b]">AnyFit과 함께 시작해요</h2>
                        <p className="mt-2 text-[15px] text-[#697A85]">하나의 계정으로 편리한 운동 생활을 만나보세요.</p>
                    </div>

                    <form onSubmit={handleSubmit} onChange={() => setSubmitMessage('')}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="signupName" className="mb-2 block text-sm font-medium text-[#142E3B]">이름</label>
                                <input 
                                    id="signupName" 
                                    name="name" 
                                    type="text" 
                                    autoComplete="name" 
                                    required
                                    placeholder="이름을 입력해 주세요." 
                                    className="h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"
                                />
                            </div>

                            <div>
                                <label htmlFor="signupEmail" className="mb-2 block text-sm font-medium text-[#142E3B]">이메일</label>
                                <input 
                                    id="signupEmail" 
                                    name="email" 
                                    type="text" 
                                    autoComplete="email" 
                                    required
                                    placeholder="이메일을 입력해 주세요." 
                                    className="h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"
                                />
                            </div>

                            <div>
                                <label htmlFor="signupPassword" className="mb-2 block text-sm font-medium text-[#142E3B]">비밀번호</label>
                                <input 
                                    id="signupPassword" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="newPassword" 
                                    required
                                    ref={passwordRef}
                                    onInput={validatePasswordMatch}
                                    minLength={8}
                                    pattern="(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\s]).{8,}"
                                    title="영문, 숫자, 특수문자를 조합해 8자 이상 입력해 주세요."
                                    placeholder="비밀번호를 입력해 주세요." 
                                    className="h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"
                                />
                            </div>

                            <div>
                                <label htmlFor="signupPasswordConfirm" className="mb-2 block text-sm font-medium text-[#142E3B]">비밀번호 확인</label>
                                <input 
                                    id="signupPasswordConfirm" 
                                    name="passwordConfirm" 
                                    type="password" 
                                    autoComplete="newPassword" 
                                    required
                                    ref={passwordConfirmRef}
                                    onInput={validatePasswordMatch}
                                    placeholder="비밀번호를 다시 입력해 주세요." 
                                    className="h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"
                                />
                                <p className="mt-2 text-xs text-[#697A85]">영문숫자특수문자 조합 8자 이상</p>
                            </div>
                        </div>

                        <fieldset className="mt-6 px-3 text-[#142E3B]">
                            <legend className="sr-only">약관 동의</legend>

                            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium">
                                <input 
                                    type="checkbox" 
                                    name="agreeAll" 
                                    checked={allAgreed} 
                                    onChange={(event) => handleAllAgreementChange(event.target.checked)} 
                                    className="size-[18px] accent-[#112E39]" 
                                />
                                전체 동의
                            </label>

                            <div className="mt-4 flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-2">
                                    <label className="flex cursor-pointer items-center gap-3 text-xs">
                                        <input 
                                            type="checkbox" 
                                            name="terms" 
                                            required
                                            checked={agreements.terms}
                                            onChange={(event) => handleAgreementChange('terms', event.target.checked)}
                                            className="size-[18px] accent-[#112E39]" 
                                        />[필수] 이용약관 동의
                                    </label>

                                    <button type="button" onClick={() => setActiveAgreement('terms')} className="text-xs cursor-pointer text-[#697A85]">보기</button>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <label className="flex cursor-pointer items-center gap-3 text-xs">
                                        <input 
                                            type="checkbox" 
                                            name="privacy" 
                                            required
                                            checked={agreements.privacy}
                                            onChange={(event) => handleAgreementChange('privacy', event.target.checked)}
                                            className="size-[18px] accent-[#112E39]" 
                                        />[필수] 개인정보 수집 및 이용 동의
                                    </label>

                                    <button type="button" onClick={() => setActiveAgreement('privacy')} className="text-xs cursor-pointer text-[#697A85]">보기</button>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <label className="flex cursor-pointer items-center gap-3 text-xs">
                                        <input 
                                            type="checkbox" 
                                            name="privacy" 
                                            checked={agreements.marketing}
                                            onChange={(event) => handleAgreementChange('marketing', event.target.checked)}
                                            className="size-[18px] accent-[#112E39]" 
                                        />[선택] 마케팅 정보 수신 동의
                                    </label>

                                    <button type="button" onClick={() => setActiveAgreement('marketing')} className="text-xs cursor-pointer text-[#697A85]">보기</button>
                                </div>
                            </div>
                        </fieldset>

                        <button type="submit" className="mt-6 h-[52px] w-full rounded-md bg-[#112E39] font-medium text-white cursor-pointer">회원가입</button>
                        
                        <p role="status" className="mt-3 text-sm text-[#697A85]">{submitMessage}</p>
                    </form>

                    <p className="mt-4 text-center text-sm text-[#697A85]">
                        이미 계정이 있으신가요?{''}
                        <Link to="/login" className="ml-2 font-medium text-[#112E39]">로그인</Link>
                    </p>
                </div>

            </section>

            <AgreementDialog title={agreementTitle} isOpen={activeAgreement !== null} onClose={() => setActiveAgreement(null)}>
                {activeAgreement === 'terms' && (<p>이용약관 원문을 준비 중입니다.</p>)}
                {activeAgreement === 'privacy' && (<p>개인정보 수집 및 이용 안내를 준비 중입니다.</p>)}
                {activeAgreement === 'marketing' && (<p>마케팅 정보 수신 안내를 준비 중입니다.</p>)}
            </AgreementDialog>
        </main>
    )
}

export default SignupPage
