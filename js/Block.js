/**
 * Block类  障碍物类
 * @img_url 图片的路径
 */
 function Block(img_url) {
    this.arr = [
        { x: 8, y: 8 },
        { x: 8, y: 9 },
        { x: 8, y: 10 },
        { x: 9, y: 10 },
        { x: 10, y: 10 },
        { x: 11, y: 10 },
        { x: 12, y: 10 },
        { x: 13, y: 10 }
    ];

    //接收图片路径
    this.img_url = img_url;
}