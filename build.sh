cd files
node ../xml.js org > ../a.xml
cd ..
find files/ -type f | while read line ; do cp -u -v $line files/ ; done
glib-compile-resources --sourcedir=files/ a.xml 