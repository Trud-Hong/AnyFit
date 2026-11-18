function AuthBrandPanel(){
    // 왼쪽 브랜드 소개
    return(
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
    )
}

export default AuthBrandPanel