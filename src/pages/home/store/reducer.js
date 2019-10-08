
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/13910150-3c33a8d64aa623bc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/13910150-3c33a8d64aa623bc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [{
        id: 1,
        title: '一半人觉得她美艳绝伦，一半人觉得她长相清奇难以接受',
        desc: '1.不要抱怨,抱我 2、最近有谣言说我喜欢你,我要澄清一下,那不是谣言 3.我怀疑你的本质是一本书,不然为什么让我越看越想睡 4...',
        imgUrl: '//upload-images.jianshu.io/upload_images/16564498-21b04f185fc704bc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: '一半人觉得她美艳绝伦，一半人觉得她长相清奇难以接受',
        desc: '1.不要抱怨,抱我 2、最近有谣言说我喜欢你,我要澄清一下,那不是谣言 3.我怀疑你的本质是一本书,不然为什么让我越看越想睡 4...',
        imgUrl: '//upload-images.jianshu.io/upload_images/16564498-21b04f185fc704bc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 3,
        title: '一半人觉得她美艳绝伦，一半人觉得她长相清奇难以接受',
        desc: '1.不要抱怨,抱我 2、最近有谣言说我喜欢你,我要澄清一下,那不是谣言 3.我怀疑你的本质是一本书,不然为什么让我越看越想睡 4...',
        imgUrl: '//upload-images.jianshu.io/upload_images/16564498-21b04f185fc704bc.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
        id: 3,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    ],
    writterList: [{
        id: 1,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc: 'AirPods 2'
    },
    {
        id: 2,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc: 'SpreadJs RadowMin'
    },
    {
        id: 3,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc: 'iPadPro 11'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
} 