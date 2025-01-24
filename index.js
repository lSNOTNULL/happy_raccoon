async function makeIssue() {
    // env.########
    const token = process.env.GH_TOKEN; // 주의! 일치해야함 (env와 일치해야함)
    // 요고 1
    const OWNER = "lSNOTNULL"; // 여러분들의 github 계정 이름
    // 요고 2
    const REPO = "happy_raccoon"; // 여러분들의 현재 리포지터리 이름

    try {
        const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: "행운의 숫자",
                body: `${Math.floor(Math.random() * 100) + 1}`,
            })
        });
    
        if (response.ok) {
            console.log("성공");
        } else {
            console.log("실패");
            const text = await response.text(); // 실패 시 응답 본문을 출력
            console.log("응답 내용:", text);
        }
    } catch (error) {
        console.error("에러 발생:", error);
    }
}
    
makeIssue();