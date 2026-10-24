function LoginPage(){
    return (
        <main className={"flex min-h-screen bg-white"}>
            {/*  왼쪽 브랜드 소개  */}
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

            {/*  오른쪽 로그인 영역  */}
            <section className={"flex min-h-screen flex-1 items-center justify-center"}>
                <div className={"w-[400px]"}>
                    <div className={"mb-6"}>
                        <h2 className={"text-[30px] font-bold text-[#142E3b]"}>다시 만나 반가워요.</h2>

                        <p className={"mt-2 text-[15px] text-[#697A85]"}>AnyFit 계정으로 로그인 해주세요.</p>
                    </div>

                    <div className={"flex flex-col gap-4"}>
                        <div>
                            <label className={"mb-2 block text-sm font-medium text-[#142E3B]"}>이메일</label>
                            <input type="email" placeholder={"이메일을 입력해 주세요"} className={"h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"}/>
                        </div>

                        <div>
                            <label className={"mb-2 block text-sm font-medium text-[#142E3B]"}>비밀번호</label>
                            <input type="password" placeholder={"비밀번호를 입력해 주세요"} className={"h-[44px] w-full rounded-md border border-[#CBD5DB] px-3 outline-none focus:border-[#112E39]"}/>
                        </div>
                    </div>

                    <button type={"button"} className={"mt-6 h-[52px] w-full rounded-md bg-[#112E39] font-medium text-white"}>로그인</button>

                    <div className={"my-6 flex items-center gap-3"}>
                        <div className={"h-px flex-1 bg-[#DEE4E8]"}/>
                        <span className={"text-xs text-[#697A85]"}>또는 소셜 계정으로 로그인</span>
                        <div className={"h-px flex-1 bg-[#DEE4E8]"}/>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <button type={"button"} className={"h-12 w-full rounded-md border border-[#747775] bg-white text-sm"}>
                            Google로 로그인
                        </button>

                        <button type={"button"} className={"h-12 w-full rounded-md bg-[#FEE500] text-sm text-[#1F1F1F]"}>
                            카카오 로그인
                        </button>

                        <button type={"button"} className={"h-12 w-full rounded-md bg-[#03C75A] text-sm text-white"}>
                            네이버 로그인
                        </button>
                    </div>

                    <div className={"mt-6"}>
                        <p className={"text-sm text-[#48616F]"}>계정이 없으신가요?{' '}
                            <a href="/signup" className={"font-medium text-[#112E39]"}>회원가입</a>
                        </p>

                        <p className={"mt-2 text-xs text[#7C8A93]"}>로그인 후 소속 브랜드&지점으로 이동합니다.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginPage