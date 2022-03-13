<template>
    <div class="activity">
        <i class="fa-solid fa-chevron-left" @click="$router.go(-1)"></i>
        <span class="title">활동</span>
        <p class="followActivity">팔로우 요청</p>
        <div class="item">
            <img src="/images/example.jpeg" alt="">
             <span class="text">
                 <b>abcde</b>님이 팔로우를 요청했습니다.
             </span>
             <span class="date">5일</span>
        </div>
        <div class="line"></div>
        <p class="time">이번 주</p>
        <div class="item">
            <img src="/images/example.jpeg" alt="">
             <span class="text">
                 Seoul, Korea, KR 근처 확인되지 않은 Mac OS X PC에서 방금 로그인했습니다.
                <span class="date">5일</span>
             </span>
        </div>
        <div class="line"></div>
        <p class="time">이번 달</p>
        <div class="item">
            <img src="/images/example.jpeg" alt="">
             <span class="text">
                 <b>abcde</b>님이 Mypofolgram을 사용중입니다.
                <span class="date">10주</span>
             </span>
             <div class="buttonBackground">팔로우</div>
        </div>
        <div class="line"></div>
    </div>
</template>