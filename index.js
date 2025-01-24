async function makeIssue() {
    // env.########
    const token = process.env.GH_TOKEN; // 주의! 일치해야함 (env와 일치해야함)
    // 요고 1
    const OWNER = "qus0in"; // 여러분들의 github 계정 이름
    // 요고 2
    const REPO = "happy_raccoon"; // 여러분들의 현재 리포지터리 이름
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "오늘 먹을 칼로리", // 요고 3
            body: `${Math.floor(Math.random() * 200) + 100}`, // 요고 4
        })
    });
    if (response.ok) {
        console.log("성공");
    } else {
        console.log("실패");
    }
}

makeIssue();