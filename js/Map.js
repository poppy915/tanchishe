/**
 * Map类    地图类
 * @row     行属性
 * @col     列属性   
 * @width   总宽度
 * @height  总高度
 * 
 */
function Map(row, col, width, height) {
    //接收数据
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    //创建容器
    this.dom = document.createElement('div');
    //设置类名
    this.dom.className = 'box';
    //创建一个数组
    this.arr = [];
}

//填充方法
Map.prototype.fill = function() {
    //遍历row次
    for (var j = 0; j < this.row; j++) {
        // 创建一个行容器
    var row_dom = document.createElement('div');
    //设置类名
    row_dom.className = 'row';

    //创建一个行数组
    var row_arr = [];

    //遍历col将row_dom填满
        for (var i = 0; i < this.col; i++) {
        //创建一个小方格
        var span = document.createElement('span');

        // 追加元素
        row_dom.appendChild(span);

        //也要追加到行数组中
        row_arr.push(span);

         }

         //讲填满的行容器在此放入dom中
        this.dom.appendChild(row_dom);
        //也要讲填满之后的行数组 放入大数组中 形成二维数组
        this.arr.push(row_arr);
    }

    //上树
    document.body.appendChild(this.dom);
}

//清屏方法
Map.prototype.clear = function() {
    //遍历数组
    for (var i = 0; i < this.arr.length; i++) {
        //内部嵌套循环
        for (var j = 0; j < this.arr[i].length ; j++) {
            //清楚元素中的背景颜色
            this.arr[i][j].style.backgroundColor = 'white';
            //还要清除背景图片
            this.arr[i][j].style.backgroundImage= '';
        }
    }
}