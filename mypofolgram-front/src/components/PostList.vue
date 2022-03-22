<template>
    <div class="post">
        <div class="top">
            <img src="/images/example.jpeg" alt="프로필">
            <p>eunj_eong</p>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="photoList">
            <img src="/images/example.jpeg" alt="">
        </div>
        <div class="bottom">
            <div class="iconList">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-paper-plane"></i>
                <div>
                    이미지 더보기 개수
                </div>
                <i class="fa-solid fa-bookmark flexRight"></i>
            </div>
            <p class="like">좋아요 123,456개</p>
            <p>
                <span class="nickname">eunj_eong</span>
                <span class="content">내용이 들어갑니다.
                    <span class="hashtag">#해시태그</span>
                </span>
            </p>
            <p class="comment">댓글 23,123개 모두 보기</p>
            <p class="time">15시간 전</p>
        </div>
        <div class="commentArea">
            <i class="fa-solid fa-face-smile-wink"></i>
            <input type="text" placeholder="댓글 달기...">
            <div class="button">
                게시
            </div>
        </div>
    </div>
</template>