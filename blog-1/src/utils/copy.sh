
#!/bin/sh
cd  /Users/liyajun/Documents/慕课网学习/node_blog/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log