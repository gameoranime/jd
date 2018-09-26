addEventListener('load', function () {
    var jdCategory = new JdCategory();
    jdCategory.initLeftSlide();
    jdCategory.initRightSlide();
    jdCategory.leftCeiling();
})

var JdCategory = function () {

}

JdCategory.prototype = {
    initLeftSlide: function () {
        var swiper = new Swiper('.category-left .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
    initRightSlide: function () {
        var swiper = new Swiper('.category-right .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    },
    leftCeiling: function () {
        var ul = document.querySelector('.category-left ul');
        var lis = ul.children;
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
        }
        // 添加点击事件
        ul.addEventListener('click', function (e) {
            // 触发源是a标签
            var li = e.target.parentNode;
            // console.log(li);
            var index = li.index;
            var liHeight = li.offsetHeight;
            var distanceY = -index * liHeight;
            var wrapper = ul.parentNode.parentNode;

            var maxDistanceY = document.querySelector('.category-left').offsetHeight - ul.offsetHeight;
            if (distanceY > maxDistanceY) {
                wrapper.style.transform = 'translate3d(0px, ' + distanceY + 'px, 0px)';
            } else {
                ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + maxDistanceY + 'px, 0px)';
            }
            // console.log(wrapper);

            wrapper.style.transitionDuration = '300ms';

            // 清除class和加class
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            li.classList.add('active');


        })
    }
}