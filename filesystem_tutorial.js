const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'This is an example', (err) =>{
   if (err)
       console.log(err);
    else {
       console.log('file successfully created');
       fs.readFile('example.txt', 'utf8', (err, file)=>{
          if (err)
              console.log(err);
          else {
              console.log("------------ file contents ------------")
              console.log(file);
              fs.rename('example.txt', 'example2.txt', (err)=>{
                  if (err)
                      console.log(err);
                  else {
                      console.log('renamed the file');
                      fs.unlink('example2.txt', (err)=>{
                          if (err)
                              console.log(err);
                          else
                              console.log('everthing has been cleaned up');
                      });
                  }
              });
          }
       });

   }
});

