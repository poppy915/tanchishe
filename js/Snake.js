/**
 * Snake类  蛇类
 * 
 */
 function Snake(snake_img_obj) {
    //数组属性 拥有盛放蛇的每一节身体
    this.arr = [
        { x: 4, y: 4 },
        { x: 4, y: 5 },
        { x: 4, y: 6 },
        { x: 4, y: 7 },
        { x: 4, y: 8 }
    ];
    //方向属性
    this.diretion = 39; // 左37 上38 右39表示向右 下40

    //定义锁
    this.lock = true;

    //定义属性获取蛇类中头部图片
    this.headImg = snake_img_obj.headImg;
    //定义属性获取蛇类中身体图片
    this.bodyImg = snake_img_obj.bodyImg;
    //定义属性获取蛇类中尾部图片
    this.tailImg = snake_img_obj.tailImg;

    //定义头部图片的索引
    this.head_idx = 2;
    //定义尾部图片的索引
    this.tail_idx = 0;

    
}

//蛇移动的方法
Snake.prototype.move = function() {
    //移动之后就可以开锁了
    this.lock = true;
    //根据老的头部创建新的头部
    var newHead = {
        x: this.arr[this.arr.length-1].x,
        y: this.arr[this.arr.length-1].y,
    }

    //判断蛇的方向
        //此时x值不变 y值--
    switch (this.diretion) {
        case 37:
            //此时x值不变 y值--
            newHead.y--;
            break;
        case 38:
            //此时y值不变 x值--
            newHead.x--;
            break;
        case 39:
            // 此时x值不变 y值++
            newHead.y++;
            break;
        case 40:
            //此时y值不变 x值++
            newHead.x++;
            break;
    }

    //将新的头部放入道数组中
    this.arr.push(newHead);

    //删除尾部
    this.arr.shift();

    //在蛇移动之后改变蛇的尾部图片索引
    var tail = this.arr[0];
    //获取前一项
    var pp = this.arr[1];

    //比较
    if (tail.x === pp.x) {
        //说明是在同一行
        //比较y值
        if (tail.y > pp.y) {
            this.tail_idx = 2;
        }else {
            this.tail_idx = 0;
        }
    }else {
        if (tail.y === pp.y) {
            //说明在同一列
            //比较x值
            if (tail.x > pp.x) {
                this.tail_idx = 3;
            }else {
                this.tail_idx = 1;
            }
        }
    }
}

//蛇转向的方法
Snake.prototype.change = function(direction) {
    //判断锁的状态
    if (!this.lock)return;

    //把锁关闭
    this.lock = false;
    //转换数据
    var result = Math.abs(direction - this.diretion);
    //判断用户传递的值是否是合法值
    if (result === 0 || result === 2) {
        //说明用户传递的值不合法 就终止
        return;
    }

    //说明是合法的
    this.diretion = direction;


    //在改变方向的时候应该改变蛇头的索引值
    switch (this.diretion) {
        case 37:
            this.head_idx = 0;
            break;
        case 38:
            this.head_idx = 1;
            break;
        case 39:
            this.head_idx = 2;
            break;
        case 40:
            this.head_idx = 3;
            break;
    }
}

//蛇生长的方法
Snake.prototype.goup = function() {
    //获取尾部（数组的第一项）
    var tail = this.arr[0];
    //放入数组中
    this.arr.unshift(tail);
}