var posts=["2025/01/16/C或C++/1.基本数据处理/","2025/01/16/C或C++/2.结构化编程/","2025/02/02/C或C++/北航刷题知识点整集2025.2.9 张栗溦/","2025/01/20/C或C++/7.IO和文件操作/","2025/02/10/C或C++/北航刷题笔记/","2025/02/13/C或C++/张栗溦洛谷笔记/","2025/02/16/C或C++/洛谷笔记2/","2025/02/02/C或C++/洛谷算法刷题整集2025.2.9 张栗溦/","2025/02/10/C或C++/湖南工业大学刷题笔记/","2025/02/10/C或C++/洛谷算法刷题整集2025.2.9/","2025/02/12/C或C++/考试题单：/","2024/12/14/note/11.30-12.7note/","2025/01/15/新领域指南/博客以及对应操作/","2025/01/16/硬件嵌入/arduino板使用：/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };