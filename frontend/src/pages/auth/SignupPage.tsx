function SignupPage(){
    return (
        <main className={"flex min-h-screen bg-white"}>
            {/* 왼쪽 브랜드 소개 */}
            <section className={"hidden min-h-screen w-[620px] flex-col justify-between bg-[#112E39] p-16 lg:flex"}>
                <h1 className={"text-[32px] font-bold text-[#D7F56B]"}>AnyFit</h1>

                <div>
                    <div className={"mb-6"}>
                        <p className={"text-[44px] font-bold leading-[1.5] text-white"}>운영은 간편하게,</p>
                        <p className={"text-[44px] font-bold leading-[1.5] text-white"}>운동은 자유롭게,</p>
                    </div>

                    <div className={"text-[18px] leading-[1.5] text-[#B5C9D0]"}>
                        <p>지점과 회원, 수업과 예약을</p>
                        <p>AnyFit 하나로 연결하세요.</p>
                    </div>
                </div>

                <div className={"flex flex-col gap-4 text-[15px] text-[#D9E5E9]"}>
                    <p>01 여러 지점을 하나의 흐름으로</p>
                    <p>02 예약부터 출석까지 한곳에서</p>
                    <p>03 내 이용권으로 더 자유롭게</p>
                </div>

                <p className={"text-xs text-[#9AB4BD]"}>
                    FITNESS MANAGEMENT, CONNECTED.
                </p>
            </section>

            {/* 오른쪽 회원가입 영역 */}
            <section className="flex min-h-screen flex-1 items-center justify-center">
                <div className="w-[400px]">
                    <div className="mb-6">
                        <h2 className="text-[30px] font-bold text-[#142E3b]">AnyFit과 함께 시작해요</h2>
                        <p className="mt-2 text-[15px] text-[#697A85]">하나의 계정으로 편리한 운동 생활을 만나보세요.</p>
                    </div>
                </div>

            </section>
                <p>하나의 계정으로 더 편리한 운동 생활을 만나보세요</p>
                <label className=""></label> 이름
                이메일
                비밀번호
                비밀번호 확인

            <section>

            </section>
        </main>
    )
}

export default SignupPage